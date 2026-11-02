import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending'); // Muestro "Enviando..." inmediatamente

    const SERVICE_ID = 'service_xdxaqd4';
    const TEMPLATE_ID = 'template_uk3674o';
    const PUBLIC_KEY = 'enCJ5q933DobVphzb';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('✅ Email enviado:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Oculto la notificación después de 4 segundos
        setTimeout(() => setStatus(''), 4000);
      })
      .catch((error) => {
        console.error('❌ Error al enviar:', error.text);
        setStatus('error');
        
        // Oculto la notificación después de 4 segundos
        setTimeout(() => setStatus(''), 4000);
      });
  };

  return (
    <div className="contact-container">
      {/* NOTIFICACIÓN FLOTANTE (TOAST) */}
      {status === 'sending' && (
        <div className="toast-notification sending">
          ⏳ Enviando mensaje, por favor espera...
        </div>
      )}
      {status === 'success' && (
        <div className="toast-notification success">
          ✅ ¡Mensaje enviado correctamente! Te responderemos pronto.
        </div>
      )}
      {status === 'error' && (
        <div className="toast-notification error">
          ❌ Error al enviar. Intenta de nuevo o escríbenos directo.
        </div>
      )}

      <div className="page-header">
        <h2>📧 Contáctanos</h2>
        <p>¿Tienes preguntas o sugerencias? ¡Escríbenos!</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>

        <div className="map-section">
          <h3>📍 Nuestra Ubicación</h3>
          <div className="map-container">
            {/* Mapa actualizado apuntando a Campo Quijano, Salta */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.7040647018415!2d-65.64468540004765!3d-24.907781137950586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941be5407b556c0d%3A0x8c960803bc920ab9!2sPaseo%20Pioneros%20de%20Huaytiquina!5e0!3m2!1ses-419!2sar!4v1793582865210!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Campo Quijano"
            ></iframe>
          </div>
          <div className="contact-info">
            <p>📍 Campo Quijano, Salta, Argentina</p>
            <p>📧 pjsajama1982@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;