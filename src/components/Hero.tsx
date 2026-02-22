import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Amazing
                <span className="text-primary-600 block">Software Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We create cutting-edge software that transforms your business ideas into powerful digital solutions. 
                From web applications to mobile apps, we deliver excellence in every line of code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">150+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">8+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Business Photos */}
          <div className="relative">
            {/* Main Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Team collaboration in modern office"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Small Images */}
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional working on laptop"
                  className="w-full h-32 object-cover"
                />
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="Business analytics and charts"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            {/* Floating Code Window */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border border-gray-200 z-10">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-900 rounded p-2 text-xs font-mono">
                  <div className="text-green-400">$ npm run build</div>
                  <div className="text-gray-500">✓ Build complete!</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

