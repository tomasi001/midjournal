const welcomeTemplate = ({
  images,
}: {
  images?: { [key: string]: string };
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Midjournal</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Public+Sans:wght@400&display=swap');
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        margin: 20px 0;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hey!</p>
      <p>Thank you for applying for early access to Midjournal. We're genuinely excited to have you here with us from the very beginning.</p>
      <p>Midjournal is grounded in the belief that the more we understand ourselves, the more gracefully we can move through life — not just as individuals, but as a collective. That's why having you with us from the beginning truly means a lot</p>
      <p>We'll be in touch again when V0 is ready to explore. In the meantime we'd love to learn as much as we can. So if you're up for it, please take a moment to fill out this short product survey – it will help us shape something truly meaningful:</p>
      <p>👉 <a href="https://forms.gle/ReXeBVbKp4bkSsUs6" target="_blank" rel="noopener noreferrer" style="color: #007bff;">https://forms.gle/ReXeBVbKp4bkSsUs6</a></p>
      <p>Until we chat again – wishing you peace and equanimity.</p>
      <p>Regards,<br>Tom & Connor<br>(Co-founders)</p>
    </div>

    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 450px; margin: 40px auto 0; background-color: #ffffff;">
      <tr>
        <td style="padding: 20px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="135" valign="top">
                <img src="${
                  images?.logo ?? "cid:logo"
                }" alt="Midjournal Logo" width="115" height="115" style="display: block;">
              </td>
              <td width="21" align="center" valign="middle">
                <div style="border-left: 1.6px solid #000000; height: 66px;"></div>
              </td>
              <td valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-family: 'Public Sans', Arial, sans-serif; font-size: 29px; line-height: 34px; color: #000000; padding-top: 5px;">
                      Midjournal
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 0px; font-family: 'Inter', Arial, sans-serif; font-size: 10px; line-height: 12px; color: #000000;">
                      On a mission to illuminate the world of emotion.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 14px;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-right: 5px;"><a href="https://x.com/midjournalxyz" target="_blank" rel="noopener noreferrer"><img src="${
                            images?.x ?? "cid:x"
                          }" alt="X" width="20" height="20"></a></td>
                          <td style="padding-right: 5px;"><a href="https://www.tiktok.com/@midjournal.xyz" target="_blank" rel="noopener noreferrer"><img src="${
                            images?.tiktok ?? "cid:tiktok"
                          }" alt="TikTok" width="18" height="18"></a></td>
                          <td style="padding-right: 5px;"><a href="https://www.linkedin.com/company/midjournalxyz/" target="_blank" rel="noopener noreferrer"><img src="${
                            images?.linkedin ?? "cid:linkedin"
                          }" alt="LinkedIn" width="20" height="20"></a></td>
                          <td style="padding-right: 5px;"><a href="https://www.instagram.com/midjournal.xyz" target="_blank" rel="noopener noreferrer"><img src="${
                            images?.instagram ?? "cid:instagram"
                          }" alt="Instagram" width="19" height="19"></a></td>
                          <td><a href="https://www.facebook.com/midjournal.xyzzz" target="_blank" rel="noopener noreferrer"><img src="${
                            images?.facebook ?? "cid:facebook"
                          }" alt="Facebook" width="20" height="19"></a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 0px; font-family: 'Inter', Arial, sans-serif; font-size: 11px; line-height: 14px; color: #000000;">
                      <a href="http://www.midjournal.xyz" style="color: #000000; text-decoration: none;">www.midjournal.xyz</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
export default welcomeTemplate;
