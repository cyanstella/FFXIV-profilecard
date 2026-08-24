/* =========================
   基本設定
========================= */

const MAX_LENGTH = 80;


/* =========================
   回答反映
   文字数カウント
   フォントサイズ自動調整
========================= */

for (let i = 1; i <= 20; i++) {

  const input =
    document.getElementById(`q${i}`);

  const answer =
    document.getElementById(`answer-${i}`);

  const count =
    document.getElementById(`count-q${i}`);


  if (!input || !answer) {
    continue;
  }


  const updateAnswer = () => {

    /*
      念のためJS側でも80文字に制限
    */

    if (input.value.length > MAX_LENGTH) {

      input.value =
        input.value.slice(
          0,
          MAX_LENGTH
        );

    }


    const text =
      input.value;


    const length =
      text.length;


    /*
      回答をカードへ表示
    */

    answer.textContent =
      text;


    /*
      文字数によってフォントサイズ変更
    */

    answer.style.fontSize =
      getAnswerFontSize(length);


    /*
      カウンター
    */

    if (count) {

      count.textContent =
        length;


      const counter =
        count.parentElement;


      counter.classList.remove(
        "is-warning",
        "is-limit"
      );


      if (length >= MAX_LENGTH) {

        counter.classList.add(
          "is-limit"
        );

      } else if (length >= 60) {

        counter.classList.add(
          "is-warning"
        );

      }

    }

  };


  input.addEventListener(
    "input",
    updateAnswer
  );


  updateAnswer();

}


/* =========================
   フォントサイズ判定
========================= */

function getAnswerFontSize(length) {

  /*
    短文は大きく、
    長文ほど少しずつ小さくする
  */

  if (length <= 25) {

    return "24px";

  }


  if (length <= 45) {

    return "22px";

  }


  if (length <= 60) {

    return "20px";

  }


  return "18px";

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
        フォント読み込みを待つ
      */

      if (document.fonts) {
        await document.fonts.ready;
      }


      /*
        背景などの描画待ち
      */

      await sleep(500);


      for (let i = 1; i <= 4; i++) {

        const card =
          document.getElementById(
            `card-${i}`
          );


        /*
          画面上ではレスポンシブで
          900px等になっている場合があるので、
          出力時のみ1200×1200に固定
        */

        const originalWidth =
          card.style.width;

        const originalHeight =
          card.style.height;


        card.style.width =
          "1200px";

        card.style.height =
          "1200px";


        const dataUrl =
          await htmlToImage.toPng(
            card,
            {

              width: 1200,
              height: 1200,

              canvasWidth: 1200,
              canvasHeight: 1200,

              pixelRatio: 1,

              cacheBust: true

            }
          );


        /*
          元に戻す
        */

        card.style.width =
          originalWidth;

        card.style.height =
          originalHeight;


        downloadImage(
          dataUrl,
          `ffxiv-profile-${i}.png`
        );


        /*
          連続ダウンロード対策
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