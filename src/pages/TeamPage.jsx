import React from 'react';
import { motion } from 'framer-motion';
import './TeamPage.css';

const TeamPage = () => {
  // Placeholder team data - you can replace this with your actual data
  const teamMembers = [
    {
      name: 'Team Member Name',
      role: 'Team Lead',
      description: 'Leading overall mission planning and aerospace innovation',
      image: null,
    },
    {
      name: 'Team Member Name',
      role: 'Avionics Lead',
      description: 'Managing onboard electronics and control systems',
      image: null,
    },
    {
      name: 'Team Member Name',
      role: 'Software Lead',
      description: 'Developing telemetry and communication systems',
      image: null,
    },
    // Add more team members here
  ];

  const divisions = [
    'Aerospace Research',
    'Avionics',
    'Software Systems',
    'Ground Systems',
    'Design & Innovation',
    'Media & Outreach',
  ];

  return (
    <div className="team-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Team</h1>
            <p className="hero-subtitle">
              30+ Students Building Aerospace Innovation Together
            </p>
          </motion.div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="about-text">
            <p>
              GARI is powered by a multidisciplinary team of 30+ passionate students
              working across aerospace research, avionics, software systems, CanSat
              development, design, media, and mission-oriented engineering.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="team-section">
            <h2>Leadership Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="team-image">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <span>Photo Coming Soon</span>
                    )}
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divisions Section */}
          <div className="divisions-section">
            <h2>Team Divisions</h2>
            <div className="values-grid">
              {divisions.map((division, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{division}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
