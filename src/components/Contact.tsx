import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ data }: { data: any }) {
  return (
    <section id="contact" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Let's build something amazing together.</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-500 text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-shadow"
            >
              <Mail size={18} />
              Say Hello
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-indigo-400" />
              {data.email}
            </div>
            {data.phone && (
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-400" />
                {data.phone}
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-400" />
              {data.location}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
