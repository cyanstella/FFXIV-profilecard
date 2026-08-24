/* =========================
   回答をカードへ反映
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


let currentBackgroundData = null;


backgroundUpload.addEventListener(
  "change",
  (event) => {

    const file =
      event.target.files[0];


    if (!file) {
      return;
    }


    const reader =
      new FileReader();


    reader.onload =
      (e) => {

        currentBackgroundData =
          e.target.result;


        cardBackgrounds.forEach(
          (background) => {

            background.style.backgroundImage =
              `url("${currentBackgroundData}")`;

          }
        );

      };


    reader.readAsDataURL(file);

  }
);


/* =========================
   背景画像を解除
========================= */

const removeBackgroundButton =
  document.getElementById(
    "remove-background"
  );


removeBackgroundButton.addEventListener(
  "click",
  () => {

    currentBackgroundData = null;

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
      Number(
        opacityControl.value
      );


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

      /*
        背景画像やフォント等の描画を少し待つ
      */

      await sleep(500);


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
          ブラウザの連続ダウンロード対策
        */

        await sleep(500);

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
   ダウンロード
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