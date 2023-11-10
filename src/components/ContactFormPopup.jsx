function ContactFormPopup({ onClose }) {
    return (
      <>
        <div className="popup-overlay" onClick={onClose}></div>
        <div className="popup">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Lastname" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Your message here..." required></textarea>
            <button type="submit" className="send-button">Send</button>
            <button type="button" className="close-button" onClick={onClose}>Close</button>
          </form>
        </div>
      </>
    );
  }
  
  export default ContactFormPopup;