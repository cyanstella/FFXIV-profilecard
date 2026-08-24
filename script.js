/* =========================
   質問 → 回答カード反映
========================= */

for (let i = 1; i <= 20; i++) {

  const input =
    document.getElementById(`q${i}`);

  const answer =
    document.getElementById(`answer-${i}`);


  if (!input || !answer) {
    continue;
  }


  input.addEventListener(
    "input",
    () => {

      answer.textContent =
        input.value;

    }
  );

}


/* =========================
   背景画像
========================= */

const backgroundUpload =
  document.getElementById(
    "background-upload"
  );


const cardBackgrounds =
  document.querySelectorAll(
    ".card-background"
  );


let currentBackgroundURL = null;


backgroundUpload.addEventListener(
  "change",
  (event) => {

    const file =
      event.target.files[0];


    if (!file) {
      return;
    }


    /* 前のURLを開放 */

    if (currentBackgroundURL) {

      URL.revokeObjectURL(
        currentBackgroundURL
      );

    }


    currentBackgroundURL =
      URL.createObjectURL(file);


    cardBackgrounds.forEach(
      (background) => {

        background.style.backgroundImage =
          `url("${currentBackgroundURL}")`;

      }
    );

  }
);


/* =========================
   背景削除
========================= */

const removeBackgroundButton =
  document.getElementById(
    "remove-background"
  );


removeBackgroundButton.addEventListener(
  "click",
  () => {

    if (currentBackgroundURL) {

      URL.revokeObjectURL(
        currentBackgroundURL
      );

      currentBackgroundURL = null;

    }


    backgroundUpload.value = "";


    cardBackgrounds.forEach(
      (background) => {

        background.style.backgroundImage = "";

      }
    );

  }
);


/* =========================
   背景の暗さ
========================= */

const opacityControl =
  document.getElementById(
    "overlay-opacity"
  );


const opacityValue =
  document.getElementById(
    "opacity-value"
  );


const overlays =
  document.querySelectorAll(
    ".card-overlay"
  );


opacityControl.addEventListener(
  "input",
  () => {

    const opacity =
      Number(opacityControl.value);


    overlays.forEach(
      (overlay) => {

        overlay.style.backgroundColor =
          `rgba(5, 10, 20, ${opacity})`;

      }
    );


    opacityValue.textContent =
      `${Math.round(opacity * 100)}%`;

  }
);


/* =========================
   PNG書き出し
========================= */

const generateButton =
  document.getElementById(
    "generate-button"
  );


generateButton.addEventListener(
  "click",
  async () => {

    generateButton.disabled = true;

    generateButton.textContent =
      "画像を生成しています…";


    try {

      for (let i = 1; i <= 4; i++) {

        const card =
          document.getElementById(
            `card-${i}`
          );


        const dataUrl =
          await htmlToImage.toPng(
            card,
            {

              width: 1200,
              height: 1200,

              pixelRatio: 1,

              cacheBust: true

            }
          );


        downloadImage(
          dataUrl,
          `ffxiv-profile-${i}.png`
        );


        /*
          連続ダウンロードを
          ブラウザが処理しやすいよう
          少し間隔をあける
        */

        await sleep(350);

      }

    } catch (error) {

      console.error(error);

      alert(
        "画像の生成に失敗しました。"
      );

    } finally {

      generateButton.disabled = false;

      generateButton.textContent =
        "4枚の画像を書き出す";

    }

  }
);


/* =========================
   DOWNLOAD
========================= */

function downloadImage(
  dataUrl,
  filename
) {

  const link =
    document.createElement("a");


  link.download =
    filename;


  link.href =
    dataUrl;


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();

}


/* =========================
   WAIT
========================= */

function sleep(ms) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        ms
      )
  );

}