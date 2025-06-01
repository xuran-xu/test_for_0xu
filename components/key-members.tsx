"use client";

import { useState, useEffect, useRef } from "react";

interface Member {
  id: number;
  name: string;
  title: string;
  avatar: string;
  category: string;
}

const members: Member[] = [
  // Co-Presidents
  { id: 1, name: "Ryan Chi", title: "Co-President", avatar: "/images/members/ryan-chi.jpg", category: "Co-Presidents" },
  { id: 2, name: "Dave Deng", title: "Co-President", avatar: "/images/members/dave-deng.jpg", category: "Co-Presidents" },
  
  // University PICs
  { id: 3, name: "Patrick", title: "PIC@HKU", avatar: "/images/members/patrick.jpg", category: "University PICs" },
  { id: 4, name: "Chris", title: "PIC@CUHK", avatar: "/images/members/chris.jpg", category: "University PICs" },
  { id: 5, name: "Ausdin", title: "PIC@HKUST", avatar: "/images/members/ausdin.jpg", category: "University PICs" },
  { id: 6, name: "Tonny", title: "PIC@PolyU", avatar: "/images/members/tonny.jpg", category: "University PICs" },
  
  // Investment Research PIC
  { id: 7, name: "Oscar Cheng", title: "Investment Research PIC", avatar: "/images/members/oscar-cheng.jpg", category: "Research" },
  
  // Development & Growth PICs
  { id: 8, name: "Dennis", title: "Development PIC", avatar: "/images/members/dennis.jpg", category: "Development & Growth" },
  { id: 9, name: "Charles", title: "Growth PIC", avatar: "/images/members/charles.jpg", category: "Development & Growth" },
  { id: 10, name: "Oliver", title: "Growth PIC", avatar: "/images/members/oliver.jpg", category: "Development & Growth" },
  
  // The OGs
  { id: 11, name: "Alex Wong", title: "Founding Member", avatar: "/images/members/alex-wong.jpg", category: "The OGs" },
  { id: 12, name: "Sarah Chen", title: "Founding Member", avatar: "/images/members/sarah-chen.jpg", category: "The OGs" },
  { id: 13, name: "Michael Liu", title: "Founding Member", avatar: "/images/members/michael-liu.jpg", category: "The OGs" },
  { id: 14, name: "Emily Zhang", title: "Founding Member", avatar: "/images/members/emily-zhang.jpg", category: "The OGs" },
];

export default function KeyMembers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filter members based on search term
  useEffect(() => {
    const filtered = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [searchTerm]);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      
      scrollIntervalRef.current = setInterval(() => {
        if (carouselRef.current && !isHovered && searchTerm === "") {
          const scrollAmount = 2;
          carouselRef.current.scrollLeft += scrollAmount;
          
          // Reset scroll when reaching the end
          if (carouselRef.current.scrollLeft >= 
              carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 50);
    };

    startAutoScroll();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isHovered, searchTerm]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Key Members
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Meet the dedicated leaders and founding members who drive our mission forward.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center" data-aos="fade-up" data-aos-delay={300}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search members by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Members Carousel */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-aos="fade-up" 
            data-aos-delay={400}
          >
            {/* Navigation Arrows */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex-shrink-0 w-64 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <div className="text-center">
                      {/* Avatar */}
                      <div className="mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Name */}
                      <h3 className="text-lg font-semibold text-gray-200 mb-2">
                        {member.name}
                      </h3>
                      
                      {/* Title */}
                      <p className="text-sm text-indigo-400 mb-2">
                        {member.title}
                      </p>
                      
                      {/* Category */}
                      <span className="inline-block px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                        {member.category}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-12">
                  <p className="text-gray-400 text-lg">No members found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Duplicate members for seamless scrolling when not searching */}
          {searchTerm === "" && (
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 mt-6"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {members.map((member) => (
                <div
                  key={`duplicate-${member.id}`}
                  className="flex-shrink-0 w-64 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-indigo-400 mb-2">
                      {member.title}
                    </p>
                    <span className="inline-block px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                      {member.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Category Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay={500}>
            {Array.from(new Set(members.map(m => m.category))).map((category) => (
              <div key={category} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="text-sm text-gray-400">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 