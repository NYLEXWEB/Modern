import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Sparkles, Wrench } from 'lucide-react';
import { VALUES_DATA } from '../data/business';

export default function WhyChoose() {
  const valueIcons = [Sparkles, Ruler, ShieldCheck, Wrench];

  return (
    <section className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#D49520]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#111827]">
            Crafted For Architectural Excellence
          </h2>
          <p className="text-base text-[#4B5563]">
            Our commitment to quality fabrics, custom measurement accuracy, and professional fitting ensures long-lasting luxury for your windows.
          </p>
        </div>

        {/* Elevated Architectural Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES_DATA.map((value, index) => {
            const IconComponent = valueIcons[index % valueIcons.length];

            return (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-gray-200 bg-[#FAF9F6] rounded-3xl flex flex-col justify-between space-y-6 relative group hover:border-[#0C2D37] transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 bg-[#0C2D37] text-[#D49520] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-2xl font-light text-[#D49520] font-heading tracking-wider">
                      {value.number}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#0C2D37] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Gold Line Accent */}
                <div className="w-12 h-[3px] bg-gray-200 group-hover:bg-[#D49520] rounded-full transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
