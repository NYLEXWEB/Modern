import { motion } from 'framer-motion';
import { ExternalLink, Star, ArrowUpRight, MessageCircle } from 'lucide-react';
import GoogleIcon from './GoogleIcon';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export default function Instagram() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Modern Blinds & Curtains, I would like to inquire about your window solutions and fabric collections.`);
    window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}?text=${message}`, '_blank');
  };

  const socialChannels = [
    {
      id: 'google',
      name: 'Google Profile',
      tag: 'Verified Business • 5.0 Rating',
      badgeColor: 'text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/20',
      title: 'Google Profile & Reviews',
      description: 'Read genuine reviews from Kochi homeowners, view showroom location on maps, and rate your experience.',
      actionText: 'View Google Profile',
      url: BUSINESS_DATA.location.mapsUrl,
      icon: <GoogleIcon size={28} />,
      iconBg: 'bg-white border border-gray-200 shadow-sm',
      hoverBorder: 'hover:border-[#4285F4]',
      hoverText: 'group-hover:text-[#4285F4]',
      btnStyle: 'bg-[#4285F4] hover:bg-[#3367D6] text-white',
      badgeIcon: <Star size={12} fill="#FBBC05" className="text-[#FBBC05]" />
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Direct',
      tag: 'Instant Concierge • Active Now',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      title: 'WhatsApp Consultation',
      description: 'Get immediate pricing estimates, fabric video swatches, and book a free laser measurement visit in Kochi.',
      actionText: 'Chat on WhatsApp',
      onClick: openWhatsApp,
      icon: <WhatsAppIcon size={28} className="text-white" />,
      iconBg: 'bg-[#25D366] text-white shadow-sm',
      hoverBorder: 'hover:border-[#25D366]',
      hoverText: 'group-hover:text-[#25D366]',
      btnStyle: 'bg-[#25D366] hover:bg-[#20ba5a] text-white',
      badgeIcon: <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
    },
    {
      id: 'instagram',
      name: 'Instagram Official',
      tag: `@${BUSINESS_DATA.contact.instagram}`,
      badgeColor: 'text-[#E4405F] bg-[#E4405F]/10 border-[#E4405F]/20',
      title: 'Instagram Reels & Stories',
      description: 'Watch real drapery movement, motorized ripple fold tracks in action, and luxury Kerala interior inspiration.',
      actionText: 'Follow on Instagram',
      url: BUSINESS_DATA.contact.instagramUrl,
      icon: <InstagramIcon size={28} className="text-white" />,
      iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm',
      hoverBorder: 'hover:border-[#E4405F]',
      hoverText: 'group-hover:text-[#E4405F]',
      btnStyle: 'bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white',
      badgeIcon: <MessageCircle size={12} className="text-[#E4405F]" />
    },
    {
      id: 'facebook',
      name: 'Facebook Page',
      tag: 'Modern Blinds & Curtains',
      badgeColor: 'text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/20',
      title: 'Facebook Community',
      description: 'Stay connected for new seasonal fabric arrivals, festive discounts, and installation project portfolios.',
      actionText: 'Visit Facebook Page',
      url: BUSINESS_DATA.contact.facebookUrl,
      icon: <FacebookIcon size={30} />,
      iconBg: 'bg-[#1877F2] text-white shadow-sm',
      hoverBorder: 'hover:border-[#1877F2]',
      hoverText: 'group-hover:text-[#1877F2]',
      btnStyle: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
      badgeIcon: <span className="text-[11px] font-bold text-[#1877F2]">f</span>
    }
  ];

  return (
    <section id="social" className="py-24 px-4 sm:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D49520]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0C2D37]">
                Official Connectivity
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111827]">
              Connect Across Our <br />
              <span className="font-semibold text-[#0C2D37]">Official Channels.</span>
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed font-normal">
              Direct consultation on WhatsApp, verified reviews on Google, real installation reels on Instagram, and community updates on Facebook.
            </p>
          </div>

          <div className="text-xs text-[#4B5563] bg-[#FAF9F6] border border-gray-200 px-5 py-3 rounded-2xl flex items-center gap-2.5 self-start lg:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>All profiles officially verified for <strong>Modern Blinds & Curtains</strong></span>
          </div>
        </div>

        {/* 4 Cards Grid with Original Icons & Brand Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {socialChannels.map((channel, idx) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group bg-[#FAF9F6] border border-gray-200 ${channel.hoverBorder} rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md`}
            >
              <div className="space-y-6">
                {/* Top Row: Icon & Tag */}
                <div className="flex items-start justify-between gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 ${channel.iconBg}`}>
                    {channel.icon}
                  </div>

                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border ${channel.badgeColor}`}>
                    {channel.badgeIcon}
                    <span className="truncate max-w-[130px]">{channel.tag}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className={`text-xl font-semibold text-[#111827] ${channel.hoverText} transition-colors`}>
                    {channel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-gray-200/80">
                {channel.onClick ? (
                  <button
                    onClick={channel.onClick}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${channel.btnStyle}`}
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight size={15} />
                  </button>
                ) : (
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${channel.btnStyle}`}
                  >
                    <span>{channel.actionText}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
