import Image from "next/image";
import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="rounded-2xl p-6 my-15"
    >
      <div className="flex justify-center items-center">
        <Image
          src="/images/landing-page/review us.svg"
          alt="Review Section showcasing customer feedback and ratings"
          width={1200}
          height={180}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
