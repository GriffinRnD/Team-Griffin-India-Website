import { sponsor } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Beloved  <br className="sm:block hidden" /> Sponsors
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ours Sponsors are the one that help us realise our ambitions by
        financing all our material, tools and testing equipments. They 
        truely enable us to push towards our ambitious goals.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={sponsor} alt="billing" className="w-[50%] h-[90%]" />
    </div>
  </section>
);

export default CardDeal;
