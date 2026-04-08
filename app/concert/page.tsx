import css from "./Concert.module.css";

const concertTinzo = [
  {
    date: "04.10",
    city: "SANTA FE, NM",
    place: "MEOW WOLF",
    image: "/Concert/con1.jpg",
  },
  {
    date: "04.18",
    city: "HOUSTON, TX",
    place: "ART CLUB",
    image: "/Concert/con2.jpg",
  },
  {
    date: "05.25",
    city: "DETROIT, MI",
    place: "MOVEMENT",
    image: "/Concert/con1.jpg",
  },
  {
    date: "06.07",
    city: "HOLLYWOOD, CA",
    place: "OUTLOUD WEHO PRIDE",
    image: "/Concert/con2.jpg",
  },
];

export default function Concert() {
  return (
    <>
      <section className={css.introConcert}>
        <div className={css.introBgLayer} data-anim="page-visual" aria-hidden />
        <div className={css.introWrap}>
          <h1 className={css.titleConcert} data-anim="page-title">
            Next Stops
          </h1>
        </div>
      </section>

      <section className={css.sectionConcert}>
        <div className={css.globalWrap}>
          <div className={css.cardsContainer}>
            {concertTinzo.map((concert, index) => (
              <div
                key={concert.date}
                className={css.wrapConcert}
                data-anim="reveal"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${concert.image})`,
                }}
              >
                <p className={css.dateConcert}>{concert.date}</p>
                <p className={css.cityConcert}>{concert.city}</p>
                <p className={css.placeConcert}>{concert.place}</p>
                <button className={css.buyTickets}>Buy Tickets</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
