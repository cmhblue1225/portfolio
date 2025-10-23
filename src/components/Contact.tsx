import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { trackContactClick } from '../utils/analytics'

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '이메일',
      value: 'cmhblue1225@naver.com',
      href: 'mailto:cmhblue1225@naver.com',
      description: '',
      type: 'email' as const
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '전화번호',
      value: '010-5116-5305',
      href: 'tel:010-5116-5305',
      description: '',
      type: 'phone' as const
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '위치',
      value: '대한민국 서울',
      href: '#',
      description: '',
      type: null
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600',
      type: 'linkedin' as const
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:cmhblue1225@naver.com',
      color: 'hover:text-red-500',
      type: 'email' as const
    }
  ]

  return (
    <section id="contact" className="py-20 bg-apple-gray-50 dark:bg-apple-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 왼쪽: 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-6">
                연락처 정보
              </h3>
            </div>

            {/* 연락처 카드들 */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  onClick={info.type ? () => trackContactClick(info.type!) : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-6 bg-white dark:bg-apple-gray-800 rounded-2xl shadow-lg card-hover block"
                >
                  <div className="text-apple-blue mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-dark dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-apple-blue font-medium">
                      {info.value}
                    </p>
                    <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* 소셜 링크들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-4">
                소셜 미디어
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContactClick(social.type)}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 ${social.color} transition-all duration-200`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          
        </div>

      </div>
    </section>
  )
}

export default Contact