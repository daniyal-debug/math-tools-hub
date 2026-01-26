'use client';

import { useState } from 'react'
import Button from '../../src/components/ui/Button'
import Input from '../../src/components/ui/Input'
import { Send, Mail, MapPin, Globe } from 'lucide-react'

// Note: Metadata cannot be exported from a client component.
// If needed, move this to a parent layout or a separate server component wrapper.

export default function Contact() {
    const [status, setStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('Thank you! Your message has been simulated (sent).')
    }

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-12 px-4 animate-fade-in">
            <section className="text-center space-y-4">
                <h1 className="text-5xl font-black text-white">Get in Touch</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Have a question or a suggestion for a new tool? We'd love to hear from you.
                </p>
            </section>

            <div className="grid lg:grid-cols-2 gap-12 pt-8">
                {/* Contact Form */}
                <div className="glass-card p-8 md:p-10 space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Input label="Name" placeholder="Your Name" required />
                            <Input label="Email" type="email" placeholder="your@email.com" required />
                        </div>
                        <Input label="Subject" placeholder="What is this regarding?" required />
                        <div className="form-control space-y-2">
                            <label className="label py-0">
                                <span className="label-text text-gray-400 font-medium">Message</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-32 bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10 text-white transition-all duration-300 rounded-xl"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full gap-2 py-4">
                            <Send className="w-4 h-4" /> Send Message
                        </Button>
                    </form>

                    {status && (
                        <div className="p-4 rounded-xl bg-primary-mint/10 border border-primary-mint/20 text-primary-mint text-center font-medium animate-pulse">
                            {status}
                        </div>
                    )}
                </div>

                {/* Contact Info */}
                <div className="space-y-8 py-4">
                    <h2 className="text-3xl font-bold text-white">Contact Information</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Feel free to reach out through the form or using the details below. We typically respond within 24-48 business hours.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary-mint/20 group-hover:border-primary-mint/30 transition-all duration-500">
                                <Mail className="w-6 h-6 text-primary-mint" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Email</h4>
                                <p className="text-gray-400">support@mathtoolshub.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary-blue/20 group-hover:border-primary-blue/30 transition-all duration-500">
                                <Globe className="w-6 h-6 text-primary-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Website</h4>
                                <p className="text-gray-400">www.mathtoolshub.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary-coral/20 group-hover:border-primary-coral/30 transition-all duration-500">
                                <MapPin className="w-6 h-6 text-primary-coral" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Location</h4>
                                <p className="text-gray-400">Global / Remote</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
