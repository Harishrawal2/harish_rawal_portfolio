// import React from 'react';
// import { motion } from 'framer-motion';
// import RobotScene from './RobotScene';

// const WhyChoose: React.FC = () => {
//     return (
//         <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
//             <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
//                 <motion.div
//                     className="w-full md:w-1/2 z-10 mb-10 md:mb-0"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <motion.h1
//                         className="text-5xl md:text-7xl font-bold mb-6"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2, duration: 0.8 }}
//                     >
//                         Why <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#FF33CC]">
//                             Choose <br />AIAF?
//                         </span>
//                     </motion.h1>
//                     <motion.p
//                         className="text-lg text-white/80 mb-8 max-w-md"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.4, duration: 0.8 }}
//                     >
//                         Experience the next generation of AI technology with full ownership and control.
//                     </motion.p>
//                     <motion.div
//                         className="flex space-x-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6, duration: 0.8 }}
//                     >
//                         <button className="button-primary">Get Started</button>
//                         <button className="button-secondary">Learn More</button>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     className="w-full md:w-1/2 h-[500px] relative"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                 >
//                     <RobotScene />
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default WhyChoose;