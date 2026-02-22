import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular. Responsive, fast, and SEO-optimized.',
      features: ['React/Vue/Angular', 'Responsive Design', 'SEO Optimization', 'Performance Tuning']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. Beautiful interfaces with seamless user experiences.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Backend Development',
      description: 'Robust server-side solutions with APIs, databases, and cloud infrastructure. Scalable and secure architectures.',
      features: ['Node.js/Python/Go', 'REST/GraphQL APIs', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality. Wireframes, prototypes, and design systems.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Modern cloud infrastructure and DevOps practices. Automated deployments, monitoring, and scaling solutions.',
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring & Analytics']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Consulting & Strategy',
      description: 'Technical consulting and digital transformation strategies. Architecture reviews and technology roadmaps.',
      features: ['Technical Audits', 'Architecture Design', 'Technology Strategy', 'Team Training']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive Software Solutions
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to final deployment, we provide end-to-end software development services 
            that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold">
                Ready to Start Your Project?
              </h4>
              <p className="text-xl text-primary-100">
                Let's discuss how we can help bring your ideas to life with our expert development team.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

