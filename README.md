# Harshit Paneri - Portfolio Website

A modern, responsive portfolio website showcasing the work and experience of Harshit Paneri, a DevOps Engineer and Cloud Infrastructure specialist.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dark Theme**: Eye-friendly dark color scheme
- **Interactive Elements**: Smooth scrolling, hover effects, and transitions
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and minimal dependencies
- **Accessibility**: ARIA labels and keyboard navigation support

## 📋 Sections Included

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal background and focus areas
3. **Experience** - Professional work history with timeline
4. **Projects** - Featured projects with descriptions
5. **Skills** - Technical skills categorized by type
6. **Certificates** - Professional certifications and achievements
7. **Community** - Community involvement and speaking engagements
8. **Blog** - Link to blog posts and articles
9. **Contact** - Contact form and social media links

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Email**: Nodemailer (for backend functionality)

## 🚀 Getting Started

### Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **That's it!** The website is ready to use

### File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── email-setup.js      # Email backend setup (optional)
└── README.md          # This file
```

### Customization

#### 1. Personal Information
Edit the following sections in `index.html`:

- **Hero Section**: Update name, title, and introduction
- **About Section**: Modify personal description and stats
- **Experience Section**: Update work history and achievements
- **Projects Section**: Add your own projects
- **Skills Section**: Update technical skills
- **Certificates Section**: Add your certifications
- **Contact Section**: Update email and social media links

#### 2. Styling
Customize the look in `style.css`:

- **Colors**: Modify CSS variables in the `:root` section
- **Fonts**: Change Google Fonts import and font-family
- **Layout**: Adjust grid layouts and spacing
- **Animations**: Modify transitions and hover effects

#### 3. Profile Image
Replace the placeholder image in the hero section:
```html
<img src="path/to/your/image.jpg" alt="Harshit Paneri">
```

## 📧 Email Setup

The website includes a contact form with two options:

### Option 1: Simple Email Client (Default)
- Opens user's default email client
- No backend required
- Works immediately

### Option 2: Backend Email Service
Use the included `email-setup.js` for server-side email handling:

1. **Install dependencies**:
   ```bash
   npm install nodemailer express
   ```

2. **Configure email settings**:
   ```javascript
   const emailConfig = {
       service: 'gmail',
       auth: {
           user: 'your-email@gmail.com',
           pass: 'your-app-password'
       }
   };
   ```

3. **Gmail App Password Setup**:
   - Enable 2-factor authentication
   - Generate app-specific password
   - Use this password in the config

4. **Run the server**:
   ```bash
   node email-setup.js
   ```

## 🎨 Customization Guide

### Colors
The website uses CSS variables for easy color customization:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary brand color */
    --accent-color: #f093fb;       /* Accent color */
    --text-primary: #ffffff;       /* Primary text color */
    --text-secondary: #b8b8b8;     /* Secondary text color */
    --bg-primary: #0a0a0a;         /* Main background */
    --bg-secondary: #1a1a1a;       /* Section background */
    --bg-card: #2a2a2a;            /* Card background */
    --border-color: #333333;       /* Border color */
}
```

### Adding New Sections
To add a new section:

1. **Add HTML structure**:
   ```html
   <section class="new-section" id="new-section">
       <div class="container">
           <div class="section-header">
               <h2>New Section</h2>
               <p>Description</p>
           </div>
           <!-- Your content here -->
       </div>
   </section>
   ```

2. **Add navigation link**:
   ```html
   <li class="nav-item">
       <a href="#new-section" class="nav-link">New Section</a>
   </li>
   ```

3. **Add CSS styling**:
   ```css
   .new-section {
       /* Your styles here */
   }
   ```

### Modifying Projects
To add/modify projects, edit the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" class="project-link">
                <i class="fab fa-github"></i>
            </a>
            <a href="demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
</div>
```

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly navigation
- Optimized images and fonts
- Compressed assets for faster loading

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome Mobile (latest)

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select source branch
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be deployed instantly
3. Optional: Connect to Git repository for continuous deployment

### Custom Domain
Update the following files when using a custom domain:
- Add CNAME file for GitHub Pages
- Update canonical URLs in meta tags
- Update social media links

## 🎯 SEO Tips

1. **Update meta tags** in `index.html`:
   ```html
   <meta name="description" content="Your description">
   <meta name="keywords" content="your,keywords,here">
   <meta property="og:title" content="Your Name - Portfolio">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="link-to-your-image">
   ```

2. **Add structured data** for better search engine understanding

3. **Optimize images** for web (use WebP format when possible)

4. **Create sitemap.xml** for search engines

## 📞 Support

For questions or issues:
- Email: info.harshitpaneri@gmail.com
- GitHub: [@harshit-paneri](https://github.com/harshit-paneri)
- LinkedIn: [harshitpaneri29](https://www.linkedin.com/in/harshitpaneri29/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Design**: Modern portfolio design principles
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Animations**: CSS3 transitions and animations

---

**Built with ❤️ by Harshit Paneri**

Feel free to fork this project and customize it for your own portfolio! 