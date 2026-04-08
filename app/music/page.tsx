"use client";
import css from "./Music.module.css";

const videoData = [
  {
    src: "https://www.youtube.com/embed/f18xfDO10UI?si=lPcjoKjwtjkIHhK6",
    title: "Video 1",
  },
  {
    src: "https://www.youtube.com/embed/M0Q152GFVkM?si=NW1sxsGsPw1xCaTU",
    title: "Video 2",
  },
  {
    src: "https://www.youtube.com/embed/FqKMaNVUt8A?si=wCv0HbPR19fqcx5A",
    title: "Video 3",
  },
  {
    src: "https://www.youtube.com/embed/zOtWpQXm2qk?si=3j3swZ2t8X8dxIZI",
    title: "Video 4",
  },
  {
    src: "https://www.youtube.com/embed/VWzbA7Tb3oA?si=iuh2y5uRxhYTdAoC",
    title: "Video 5",
  },
  {
    src: "https://www.youtube.com/embed/sHWWS-yrDQ0?si=rn2dma8T0m6aF6EW",
    title: "Video 6",
  },
];

export default function Music() {
  return (
    <>
      <section className={css.musicIntro}>
        <div className={css.introWrap}>
          <h1 className={css.titleMusic}>Music</h1>
        </div>
      </section>

      <section className={css.musicSection} id="music">
        <div className={css.videoGrid}>
          {videoData.map((item, index) => (
            <div
              key={index}
              className={css.videoWrapper}
              data-anim="video-item"
            >
              <iframe
                src={item.src}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={css.iframe}
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
