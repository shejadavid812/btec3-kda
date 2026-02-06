import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FlaskConical, Monitor, Briefcase, Award, Users, BookOpen, ArrowRight, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import kdaHero from "@/assets/kda-hero.jpg";
import scienceImage from "@/assets/btec-science-hero.jpg";
import itImage from "@/assets/btec-it-hero.jpg";
import businessImage from "@/assets/btec-business-hero.jpg";

const Index = () => {
  const stats = [
    { value: "95%", label: "Pass Rate" },
    { value: "500+", label: "Students Enrolled" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Industry Links" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "BTEC Science Graduate",
      quote: "The BTEC Science programme gave me practical skills that helped me secure a place at a top university. The teachers are incredibly supportive.",
      rating: 5,
    },
    {
      name: "David Williams",
      role: "Parent",
      quote: "My son has flourished at KDA. The BTEC IT course has prepared him perfectly for his apprenticeship in software development.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "BTEC Business Student",
      quote: "The real-world projects and industry connections have been invaluable. I feel confident about my future career in business.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Award size={28} />,
      title: "Industry-Recognised",
      description: "BTEC qualifications are valued by universities and employers worldwide.",
    },
    {
      icon: <Users size={28} />,
      title: "Expert Teachers",
      description: "Learn from experienced professionals with real industry backgrounds.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Practical Learning",
      description: "Hands-on projects and coursework that prepare you for the real world.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={kdaHero}
            alt="King David Academy Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>

        <div className="relative z-10 container-main px-4 md:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star size={16} className="fill-current" />
              Ofsted Outstanding Academy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
            >
              Shape Your Future with{" "}
              <span className="text-kda-gold">BTEC</span> at King David Academy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed"
            >
              Discover our industry-leading BTEC programmes in Science, IT, and Business. 
              Gain practical skills, real-world experience, and qualifications that open doors 
              to top universities and exciting careers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-hero text-center">
                Apply Now
              </Link>
              <Link to="/btec-science" className="btn-hero-outline text-center">
                Explore Courses
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container-main px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold mb-3"
            >
              Our Programmes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4"
            >
              BTEC Courses at KDA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Choose from our three specialised BTEC pathways, each designed to give you 
              the skills and qualifications you need for success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="BTEC Science"
              description="Explore biology, chemistry, and physics through practical experiments and real-world applications. Perfect for aspiring scientists and healthcare professionals."
              image={scienceImage}
              link="/btec-science"
              icon={<FlaskConical size={24} />}
              delay={0}
            />
            <CourseCard
              title="BTEC IT"
              description="Master coding, cybersecurity, and digital technologies. Prepare for careers in software development, IT support, and digital innovation."
              image={itImage}
              link="/btec-it"
              icon={<Monitor size={24} />}
              delay={0.1}
            />
            <CourseCard
              title="BTEC Business"
              description="Learn entrepreneurship, marketing, and management. Build the skills to launch your own business or excel in the corporate world."
              image={businessImage}
              link="/btec-business"
              icon={<Briefcase size={24} />}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold mb-3"
              >
                Why Choose KDA?
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6"
              >
                Excellence in BTEC Education
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-muted-foreground mb-8 leading-relaxed"
              >
                At King David Academy, we're committed to providing world-class BTEC education 
                that combines rigorous academic standards with practical, hands-on learning. 
                Our students consistently achieve outstanding results and go on to succeed at 
                top universities and in competitive careers.
              </motion.p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                >
                  Learn more about our academy
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={scienceImage}
                alt="Students in lab"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-xl border border-border">
                <p className="font-display font-bold text-3xl text-primary mb-1">95%</p>
                <p className="text-muted-foreground text-sm">of students achieve<br />their target grades</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold mb-3"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4"
            >
              What Our Community Says
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <Quote size={32} className="text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-kda-gold fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero">
        <div className="container-main text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join King David Academy and unlock your potential with our industry-leading 
            BTEC programmes. Applications are now open for the upcoming academic year.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-hero-outline">
              Contact Admissions
            </Link>
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
