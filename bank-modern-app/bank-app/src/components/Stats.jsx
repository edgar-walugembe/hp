import { stats } from "../constants";

import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((stats) => (
      <div
        key={stats.id}
        className={`flex-1 flex flex-row justify-start items-center`}
      >
        <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] text-white xs:leading-[53px] leading-[43px]">
          {stats.value}
        </h4>
        <p className="font-poppins font-normal sm:text-[20px] text-[15px] text-gradient xs:leading-[26px] leading-[21px] uppercase ml-3">
          {stats.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
