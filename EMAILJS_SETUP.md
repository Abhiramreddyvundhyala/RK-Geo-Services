# EmailJS Setup Guide for RK Geo Services Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Click "Connect Account"
   - Sign in with: **rkgeoservices9@gmail.com**
   - Grant necessary permissions
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `contact_form_rkgeo`

**Subject:** 
```
New Contact Form Submission - {{from_name}}
```

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
    <h2 style="color: #0a7ea4; border-bottom: 2px solid #0a7ea4; padding-bottom: 10px;">
      New Contact Form Submission
    </h2>
    
    <div style="margin: 20px 0;">
      <p><strong>Name:</strong> {{from_name}}</p>
      <p><strong>Email:</strong> {{from_email}}</p>
      <p><strong>Phone:</strong> {{from_phone}}</p>
      <p><strong>Service Required:</strong> {{service_type}}</p>
    </div>
    
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0a7ea4; margin: 20px 0;">
      <h3 style="margin-top: 0;">Message:</h3>
      <p>{{message}}</p>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
      <p>This email was sent from the RK Geo Services contact form.</p>
    </div>
  </div>
</div>
```

4. In **Settings** section:
   - **To Email:** `{{to_email}}` or directly use `rkgeoservices9@gmail.com`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`

5. Click **"Save"**
6. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"** tab
2. Find your **Public Key** (e.g., `abc123XYZ_public_key`)
3. Copy this key

## Step 5: Update Your Code

Open `src/components/sections/ContactSection.tsx` and replace:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

With your actual IDs:

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123'; // Your actual Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your actual Template ID
const EMAILJS_PUBLIC_KEY = 'abc123XYZ_public_key'; // Your actual Public Key
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. You should:
   - Receive an email at rkgeoservices9@gmail.com
   - See a WhatsApp chat window open automatically
   - See a success message on the website

## WhatsApp Auto-Send Configuration

The form automatically opens WhatsApp with a pre-filled message. Make sure the phone number is correct:

```typescript
const phoneNumber = "917702663322"; // Current WhatsApp number
```

To change it, replace with your WhatsApp number in international format (no + or spaces).

## Troubleshooting

### Email not sending?
- Check your EmailJS dashboard for errors
- Verify Service ID, Template ID, and Public Key are correct
- Check browser console for error messages
- Ensure you're not on EmailJS free tier limit (200 emails/month)

### WhatsApp not opening?
- Make sure WhatsApp is installed or WhatsApp Web is accessible
- Check if the phone number format is correct (country code without +)

## EmailJS Free Tier Limits

- 200 emails per month
- 2 email services
- 1 email template

For higher limits, consider upgrading to a paid plan.
