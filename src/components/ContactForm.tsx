'use client'
import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setFormData({ name: '', email: '', subject: '', message: '' })
            if (mounted) {
                toast.success('Message sent successfully!')
            }
        } catch (error) {
            if (mounted) {
                toast.error('Failed to send message. Please try again.')
            }
            console.error('Error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bg-[#001F4D] p-8 text-white rounded-2xl">
            {mounted && <Toaster />}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 bg-white text-black rounded"
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 bg-white text-black rounded"
                        required
                        disabled={isLoading}
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 bg-white text-black rounded"
                    required
                    disabled={isLoading}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-2 bg-white text-black rounded"
                    required
                    disabled={isLoading}
                ></textarea>
                <button 
                    type="submit" 
                    className="w-full bg-yellow-500 text-black py-3 font-medium hover:bg-yellow-600 transition-colors rounded disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    )
}

export default ContactForm