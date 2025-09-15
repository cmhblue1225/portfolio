import { motion } from 'framer-motion'
import { Heart, Code, Brain, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI 전문성',
      description: 'OpenAI API를 활용한 감정 분석, 추천 시스템 등 인공지능 기술을 실제 서비스에 적용한 경험'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '풀스택 개발',
      description: 'React, TypeScript, Node.js를 중심으로 한 현대적인 웹 애플리케이션 풀스택 개발'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '사용자 중심',
      description: '실제 사용자의 니즈를 파악하고 직관적이며 효율적인 사용자 경험을 설계'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '문제 해결',
      description: '복잡한 비즈니스 요구사항을 분석하고 창의적인 기술 솔루션으로 해결'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-apple-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-dark dark:text-white mb-6">
            개발자 <span className="text-gradient-apple">조민혁</span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            혁신적인 기술로 세상을 더 나은 곳으로 만들고자 하는 개발자입니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* 왼쪽: 프로필 사진 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="/profile.png"
                  alt="조민혁 프로필 사진"
                  className="w-64 h-64 rounded-3xl object-cover shadow-2xl"
                />
                {/* 프로필 사진 테두리 그라데이션 */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-apple-blue/20 to-purple-500/20 -z-10 transform translate-x-2 translate-y-2"></div>
              </motion.div>
            </div>
            
            {/* 소셜 링크들 */}
            <div className="flex space-x-4">
              <motion.a
                href="mailto:cmhblue1225@naver.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </motion.a>
              
              <motion.a
                href="https://github.com/cmhblue1225"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              <motion.a
                href="tel:010-5116-5305"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* 중간: 소개 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-apple-dark dark:text-white">
              안녕하세요, 저는 조민혁입니다!
            </h3>
            
            <div className="space-y-4 text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
              <p>
                저는 AI와 웹 풀스택 개발에 집중하며,
                최신 기술을 활용해 사용자에게 실질적인 가치를 제공하는 서비스를 <br></br>만들어왔습니다.
              </p>
              
              <p>
                <strong className="text-apple-blue">Synapse AI 지능형 지식 관리 시스템</strong>부터
                <strong className="text-apple-blue"> AI 감정 상담 서비스</strong>,
                <strong className="text-apple-blue"> 센서 게임 플랫폼</strong>,
                <strong className="text-apple-blue"> 편의점 종합 솔루션</strong>,
                <strong className="text-apple-blue"> 개발 문서 자동 생성 서비스</strong>등 다양한
                프로젝트를 통해 실제 환경에서 필요한 솔루션을 구현한 경험이 있습니다.
              </p>
              
              <p>
                특히 <strong className="text-apple-blue">React 19, TypeScript, Supabase</strong> 등의 
                최신 기술 스택을 활용한 엔터프라이즈급 애플리케이션 개발과
                <strong className="text-apple-blue"> AI 서비스 개발</strong>에 전문성을 가지고 있습니다.
              </p>
            </div>

            {/* 연락 정보 */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-apple-blue font-semibold">📧 이메일:</span>
                <a 
                  href="mailto:cmhblue1225@naver.com"
                  className="text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue transition-colors"
                >
                  cmhblue1225@naver.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-apple-blue font-semibold">📱 전화:</span>
                <a 
                  href="tel:010-5116-5305"
                  className="text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue transition-colors"
                >
                  010-5116-5305
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 특징 카드들 - 별도 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-apple-dark dark:text-white text-center mb-12">
            핵심 역량
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-apple-gray-50 dark:bg-apple-gray-700 rounded-2xl card-hover text-center"
              >
                <div className="text-apple-blue mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        
      </div>
    </section>
  )
}

export default About