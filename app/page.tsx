"use client";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  };

  return (
    <main>
      <Header />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col mx-auto justify-center items-center text-center px-3">
          <motion.div
            className="flex mt-28 items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInDelayed}
          >
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Strike Zone</span>
                <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </motion.div>

          <motion.h1 className="text-5xl md:text-6xl 2xl:text-7xl font-medium py-6">
            Strike Zone
            <br />
            Start fighting now.
          </motion.h1>

          <motion.p className="text-lg text-white/50 mb-8">
            Master Martial Arts by Fighting -
            <br />
            Learn, Practice, and Perfect Your Skills!
          </motion.p>

          <motion.button
            className="flex text-sm font-medium items-center bg-white text-black rounded-lg px-4 py-2 hover:bg-white/80 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Get Started for free <FaArrowRight className="ml-2" size={13} />
          </motion.button>
        </div>
        <motion.div
          className="relative mt-[6rem] rounded-xl mx-auto flex justify-center items-center max-w-[450px] md:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Image
            src="/placeholder.png"
            alt=""
            className="hidden w-full rounded-[inherit] border object-contain shadow-lg dark:block"
            width={0}
            height={0}
          />
          <Image
            src="/placeholder.png"
            alt=""
            className="block w-full rounded-[inherit] border object-contain shadow-lg dark:hidden"
            width={0}
            height={0}
          />

          <BorderBeam size={250} duration={12} delay={9} />
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-32"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl font-bold">What we Offer</p>
          <h2 className="text-5xl font-bold">Everyone can practice.</h2>
          <p className="mt-6 text-xl leading-8 text-white/90 px-8">
            Choose your <strong>martial art</strong> and get after your goals!
            Practice and perfect your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 xl:px-16 2xl:px-44 mt-12">
          <motion.div
            className="flex flex-col items-center justify-center text-center border border-white/10 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mt-4 mb-2">Sparring</p>
            <p className="text-lg text-white/50 mb-8">
              Turn on your cam and start
            </p>

            <Image
              src="/placeholder.png"
              alt=""
              width={300}
              height={300}
              className="rounded-lg object-cover mb-8 shadow-white/40 shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center text-center border border-white/10 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mt-4 mb-2">Sparring</p>
            <p className="text-lg text-white/50 mb-8">
              Turn on your cam and start
            </p>

            <Image
              src="/placeholder.png"
              alt=""
              width={300}
              height={300}
              className="rounded-lg object-cover mb-8 shadow-white/40 shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center text-center border border-white/10 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mt-4 mb-2">Sparring</p>
            <p className="text-lg text-white/50 mb-8">
              Turn on your cam and start
            </p>

            <Image
              src="/placeholder.png"
              alt=""
              width={300}
              height={300}
              className="rounded-lg object-cover mb-8 shadow-white/40 shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center text-center border border-white/10 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mt-4 mb-2">Sparring</p>
            <p className="text-lg text-white/50 mb-8">
              Turn on your cam and start
            </p>

            <Image
              src="/placeholder.png"
              alt=""
              width={300}
              height={300}
              className="rounded-lg object-cover mb-8 shadow-white/40 shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-32 md:mt-36"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl md:text-4xl font-bold">
            Stop worrying & start fighting
          </h3>
          <p className="mt-2">
            Start your journey now. No credit card required
          </p>
          <motion.button
            className="flex text-sm font-medium items-center border border-white/10 rounded-lg px-4 py-2 mt-4 hover:bg-white/10 transition duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Get Started{" "}
            <FaArrowRight
              className="ml-2 group-hover:translate-x-0.5 transition duration-300"
              size={13}
            />
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
