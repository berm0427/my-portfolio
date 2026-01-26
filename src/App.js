import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ChevronDown, Code, Palette, Zap, Mail } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const education = [
  {
    university: "순천향대학교",
    major: "정보보호학과",
	degree: "학사 (Bachelor of Engineering)",
    graduation: "2026년 02월",
    gpa: "3.67 / 4.5"
  },
  {
    university: "순천향대학교",
    major: "경찰행정학과",
	degree: "학사 (Bachelor of Arts in Police Studies)",
    graduation: "2026년 02월",
    gpa: "3.67 / 4.5"
  }
  ];
  
  const careers = [
    {
      org: "순천향대학교 SecurityFirst",
      role: "Digital Forensic Team",
      period: "22.04 ~ 23.08",
      description: "교내 정보보호 학술 동아리 활동" 
    },
	{
      org: "순천향대학교 CQRE T8 Henes Team",
      role: "Research Assistant",
      period: "23.09 ~ 23.11",
      description: "연구생 활동 및 연구 보조"
    },
    {
      org: "순천향대학교 CQRE",
      role: "IVI Team",
      period: "23.09 ~ 23.12",
      description: "자동차 IVI 분석 기술 습득"
    },
	{
      org: "순천향대학교 LISA Lab",
      role: "Undergraduate Research Intern",
      period: "24.01 ~ 24.03",
      description: "학부연구생 활동 및 연구 보조"
    }
  ];
  

  const certifications = [
    { name: "정보보안기사", issuer: "한국방송통신전파진흥원", date: "2025.05" },
    { name: "개인정보관리사 (CPPG)", issuer: "한국CPO포럼", date: "2025.12" }
  ];

  const trainings = [
    { 
      name: "화이트햇 스쿨 2기", 
      org: "한국정보기술연구원 (KITRI)",
      period: "2024.03 - 2024.09"
    },
    { 
      name: "Start-Up K-Shield Jr.", 
      org: "과학기술정보통신부",
      period: "2024.09"
    },
    { 
      name: "사이버 포렌식 보안솔루션 운영", 
      org: "강원정보보호지원센터",
      period: "2024.08"
    },
    { 
      name: "데프콘 문제로 풀어보는 메모리 포렌식", 
      org: "정보보호산업협회",
      period: "2023.07"
    }
  ];

  const projects = [
    {
      title: "Defohari Auto Analyzer",
      description: "Python 기반 윈도우 아티팩트 자동 수집 및 파싱 엔진 개발",
      tags: ["Artifact Analysis", "Automation", "Python"],
      link: "https://github.com/berm0427/defohari_auto_artifact_analyzer"
    },
    {
      title: "Mail Detection",
      description: "헤더-바디 연관 분석 기반 악성 메일 탐지 시스템",
      tags: ["Email Forensics", "Phishing Mail Detection", "Security"],
      link: "https://github.com/berm0427/mail_detection"
    }
  ];

  const skills = [
    { name: "포렌식 분석", icon: <Code className="w-6 h-6" />, items: ["디스크 포렌식", "메모리 포렌식", "이메일 포렌식"] },
    { name: "보안 도구", icon: <Palette className="w-6 h-6" />, items: ["Autopsy", "FTK Imager", "Volatility"] },
    { name: "기술 스택", icon: <Zap className="w-6 h-6" />, items: ["Python", "Linux"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              유창범 (ChangBeom YU)
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'education', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'home' ? '홈' : 
                   section === 'about' ? '소개' :
                   section === 'skills' ? '스킬' :
                   section === 'education' ? '학력/경력' :
                   section === 'projects' ? '프로젝트' : '연락처'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 - scrollY * 0.05}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="text-center z-10 px-6">
          <div className="mb-8 inline-block">
            <img
			  src={process.env.PUBLIC_URL + "/profile.jpg"}
			  alt="프로필 사진"
			  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-2 border-purple-400/50"
			/>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite]">
            안녕하세요
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            디지털 포렌식을 전공하고 있는 학생입니다
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            더 알아보기
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-5xl font-bold mb-12 text-center">소개</h3>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              안녕하세요! 저는 디지털 포렌식 분야를 전공하고 있는 학생입니다
              디지털 증거 분석과 사이버 보안에 열정을 가지고 있으며, 복잡한 보안 사건을 해결하는 것을 좋아합니다.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              최신 포렌식 기술과 보안 트렌드를 연구하며, 
              정확한 분석을 통해 디지털 범죄를 밝혀내는 것을 목표로 하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <h3 className="text-5xl font-bold mb-16 text-center">스킬</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 shadow-xl"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50">
                  {skill.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{skill.name}</h4>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

		  <section id="education" className="min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <h3 className="text-5xl font-bold mb-16 text-center">학력 및 경력</h3>
          
          {/* 1. 학위 리스트 (학력) */}
          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-2xl transition-all hover:border-purple-500/40">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-end gap-3 mb-4">
                      <h4 className="text-3xl font-bold text-white">{edu.university}</h4>
                      <span className="text-lg text-purple-400 font-medium">{edu.major}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                      <div className="space-y-2">
                        <p><span className="inline-block w-20 text-purple-400 font-semibold">학위</span> {edu.degree}</p>
                        <p><span className="inline-block w-20 text-purple-400 font-semibold">졸업</span> {edu.graduation}</p>
                      </div>
                      <div className="md:text-right">
                        <span className="bg-purple-600/20 px-4 py-2 rounded-xl border border-purple-500/30 font-bold text-purple-300">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. 경력 리스트 (새로 추가된 부분) */}
          <div className="mb-20">
             <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-purple-600 p-2 rounded-lg">
                  {/* 서류가방 아이콘 */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                경력 및 동아리 활동
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                {careers.map((career, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">{career.org}</h5>
                        <p className="text-purple-400 font-medium">{career.role}</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-slate-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                        {career.period}
                      </span>
                    </div>
                    {/* 설명이 있을 경우에만 표시 */}
                    {career.description && (
                       <p className="text-gray-300 text-sm">{career.description}</p>
                    )}
                  </div>
                ))}
              </div>
          </div>

          {/* 3. 자격증 및 교육 활동 그리드 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 자격증 컬럼 */}
            <div>
              <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-purple-600 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                자격증
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                  >
                    <h5 className="text-xl font-bold mb-2">{cert.name}</h5>
                    <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-purple-300 text-sm">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 교육 및 활동 컬럼 */}
            <div>
              <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-purple-600 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                교육 및 활동
              </h4>
              <div className="space-y-4">
                {trainings.map((training, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                  >
                    <h5 className="text-xl font-bold mb-2">{training.name}</h5>
                    <p className="text-gray-300 text-sm mb-1">{training.org}</p>
                    <p className="text-purple-300 text-sm">{training.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

	<section id="projects" className="min-h-screen flex items-center py-20">
			<div className="max-w-6xl mx-auto px-6 w-full">
			  <h3 className="text-5xl font-bold mb-16 text-center">프로젝트</h3>
			  
			  {/* 수정된 부분: Grid -> Flex로 변경하여 가운데 정렬 */}
			  <div className="flex flex-wrap justify-center gap-8">
				{projects.map((project, index) => (
				  <a
					key={index}
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					// 수정된 부분: w-full max-w-md 추가 (카드의 크기를 적절히 고정)
					className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 shadow-xl group block"
				  >
					<div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all flex items-center justify-center">
					  <Github className="w-16 h-16 text-white opacity-80" />
					</div>
					<div className="p-6">
					  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
					  <p className="text-gray-300 mb-4">{project.description}</p>
					  <div className="flex flex-wrap gap-2">
						{project.tags.map((tag, i) => (
						  <span
							key={i}
							className="px-3 py-1 bg-purple-600/30 rounded-full text-sm border border-purple-500/30"
						  >
							{tag}
						  </span>
						))}
					  </div>
					</div>
				  </a>
				))}
			  </div>
			</div>
		</section>
	  
	  <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <h3 className="text-5xl font-bold mb-12">연락하기</h3>
          <p className="text-xl text-gray-300 mb-12">
            함께 멋진 프로젝트를 만들어보시겠어요?
          </p>
          <div className="flex justify-center gap-6 mb-12">
            {/* GitHub */}
            <a
              href="https://github.com/berm0427"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-purple-600 transition-all hover:scale-110 border border-purple-500/20 shadow-xl"
            >
              <Github className="w-8 h-8" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/changbeom-yu-a81064319/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-purple-600 transition-all hover:scale-110 border border-purple-500/20 shadow-xl"
            >
              <Linkedin className="w-8 h-8" />
            </a>

            {/* Email (추가됨) */}
            <a
              href="mailto:berm0427@kakao.com"
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-purple-600 transition-all hover:scale-110 border border-purple-500/20 shadow-xl"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-400">© 2025 유창범 (ChangBeom YU). All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}