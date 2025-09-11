import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-apple-dark dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 왼쪽: 브랜드 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient-apple">
              민혁이의 보물창고
            </h3>
            <p className="text-apple-gray-300 leading-relaxed">
              혁신적인 기술로 더 나은 세상을 만들어가는 개발자 조민혁의 포트폴리오입니다.
            </p>
            <div className="flex items-center space-x-2 text-sm text-apple-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>
          </motion.div>

          {/* 중간: 빠른 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">빠른 링크</h4>
            <ul className="space-y-2">
              {[
                { name: '홈', href: '#hero' },
                { name: '소개', href: '#about' },
                { name: '기술', href: '#skills' },
                { name: '프로젝트', href: '#projects' },
                { name: '연락처', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    whileHover={{ x: 5 }}
                    className="text-apple-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 오른쪽: 연락처 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">연락처</h4>
            <div className="space-y-2 text-apple-gray-300">
              <motion.a
                href="mailto:cmhblue1225@naver.com"
                whileHover={{ x: 5 }}
                className="block hover:text-white transition-colors duration-200"
              >
                📧 cmhblue1225@naver.com
              </motion.a>
              <motion.a
                href="tel:010-5116-5305"
                whileHover={{ x: 5 }}
                className="block hover:text-white transition-colors duration-200"
              >
                📱 010-5116-5305
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="block"
              >
                📍 대한민국 서울
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-apple-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 저작권 */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-apple-gray-400 text-sm"
            >
              © {currentYear} 조민혁 (Cho MinHyuk). All rights reserved.
            </motion.p>

            {/* 기술 스택 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-sm text-apple-gray-400"
            >
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-apple-gray-800 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-apple-gray-800 rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-apple-gray-800 rounded text-xs">Tailwind</span>
                <span className="px-2 py-1 bg-apple-gray-800 rounded text-xs">Framer Motion</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 최종 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-apple-gray-400 text-sm italic">
            "코드로 세상을 더 나은 곳으로 만들어갑니다" ✨
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer