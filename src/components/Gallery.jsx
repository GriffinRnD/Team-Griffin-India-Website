import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../style';
import { imgS } from '../constants';
import { staggerContainer } from '../utils/motion';
import { GalleryCards, TitleText, TypingText } from '../components';

const Gallery = () => {
    const [active, setActive] = useState('world-2');

    return (
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="| The World" textStyles="text-center" />
          <TitleText
            title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
            textStyles="text-center"
          />
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {imgS.map((world, index) => (
              <GalleryCards
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </section>
    );
}

export default Gallery