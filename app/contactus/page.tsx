'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';








const AboutPage = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <div className="flex items-center justify-center min-h-screen bg-black p-4">
                <div className="w-full max-w-3xl bg-[#d8d8d8] rounded-lg overflow-hidden shadow-lg">
                    {/* Form Header */}
                    <div className="p-6 pb-2">
                        <h2 className="text-[#333333] text-sm font-normal">
                            Reach out to us to know more about how AI can empower your business
                        </h2>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#c5c5c5] mx-6 my-2"></div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 pt-3">
                        {/* First Name */}
                        <div className="mb-6">
                            <label htmlFor="firstName" className="block text-xs text-[#333333] font-normal mb-1">
                                First Name:
                            </label>
                            <Input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border-b border-[#c5c5c5] bg-transparent rounded-none focus:ring-0 focus-visible:ring-0 focus:border-[#333333] p-0 h-8 text-sm"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="mb-6">
                            <label htmlFor="lastName" className="block text-xs text-[#333333] font-normal mb-1">
                                Last Name:
                            </label>
                            <Input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border-b border-[#c5c5c5] bg-transparent rounded-none focus:ring-0 focus-visible:ring-0 focus:border-[#333333] p-0 h-8 text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-xs text-[#333333] font-normal mb-1">
                                Phone:
                            </label>
                            <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-[#c5c5c5] bg-transparent rounded-none focus:ring-0 focus-visible:ring-0 focus:border-[#333333] p-0 h-8 text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-xs text-[#333333] font-normal mb-1">
                                Email ID:
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-[#c5c5c5] bg-transparent rounded-none focus:ring-0 focus-visible:ring-0 focus:border-[#333333] p-0 h-8 text-sm"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-xs text-[#333333] font-normal mb-1">
                                Message:
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b border-[#c5c5c5] bg-transparent rounded-none resize-none focus:ring-0 focus-visible:ring-0 focus:border-[#333333] p-0 min-h-[80px] text-sm"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                className="bg-[#2c3642] hover:bg-[#1e2530] text-white px-10 py-2 rounded text-sm font-normal"
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <Twoinone />
            <Footer />
        </main>
    );
};

export default AboutPage; 