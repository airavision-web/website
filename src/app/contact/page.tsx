'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  property: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    property: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', property: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* ponytail: solid industrial colors, heavy borders, bold caps */}
      <section className="bg-primary text-white py-24 border-b-8 border-construction-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Contact Us</h1>
          <p className="text-xl text-white font-medium">
            Get in touch with our team to schedule your inspection
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Phone</h3>
                    <p className="text-primary">+91 9550234556</p>
                    <p className="text-primary">+91 7671010806</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Email</h3>
                    <p className="text-primary">airavision.av@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Address</h3>
                    <p className="text-primary">2nd floor, Vaibhava lakshmi Nilayam-2, plot# 608, Aparna Hillpark Rd, PJR Layout, Chanda Nagar, Hyderabad, Telangana 500050</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Hours</h3>
                    <p className="text-primary">Monday - Friday: 8AM - 6PM</p>
                    <p className="text-primary">Saturday: 9AM - 4PM</p>
                    <p className="text-primary">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <label className="block text-primary font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-primary font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-primary font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-primary font-semibold mb-2">Property Type</label>
                  <select
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="multi-family">Multi-Family</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-primary font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Location</h2>
          <div className="w-full h-96 bg-gray-200">
            <iframe
              title="Aira Vision Location"
              src="https://maps.google.com/maps?q=Vaibhava%20Lakshmi%20Nilayam%20-2,%20plot%23%20608,%20Aparna%20Hillpark%20Rd,%20PJR%20Layout,%20Chanda%20Nagar,%20Hyderabad,%20Telangana&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
