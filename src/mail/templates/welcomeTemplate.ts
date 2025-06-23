const welcomeTemplate = ({
  images,
}: {
  images?: {
    logo_black?: string;
    logo_white?: string;
    x_black?: string;
    x_white?: string;
    tiktok_black?: string;
    tiktok_white?: string;
    linkedin_black?: string;
    linkedin_white?: string;
    instagram_black?: string;
    instagram_white?: string;
    facebook_black?: string;
    facebook_white?: string;
  };
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Midjournal</title>
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400&display=swap');
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
      body {
        font-family: 'Public Sans', Arial, sans-serif;
        background-color: transparent;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .text-primary {
        color: #000000;
      }
      .link-primary {
        color: #007bff;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: transparent !important;
        }
        .container {
          background-color: #2c2c2e !important;
        }
        .text-primary,
        p,
        div {
          color: #ffffff !important;
        }
        .link-primary {
          color: #91add4 !important;
        }
        .dark-img {
          display: block !important;
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          max-width: inherit !important;
          line-height: auto !important;
          margin-top: 0px !important;
          visibility: inherit !important;
        }
        .light-img {
          display: none !important;
        }
        .separator {
          border-color: #eeeeee !important;
        }
      }
      [data-ogsc] .dark-img {
        display: block !important;
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        max-width: inherit !important;
        line-height: auto !important;
        margin-top: 0px !important;
        visibility: inherit !important;
      }
      [data-ogsc] .light-img {
        display: none !important;
      }
      [data-ogsc] .separator {
        border-color: #eeeeee !important;
      }
      [data-ogsc] .container {
        background-color: #2c2c2e !important;
      }
      [data-ogsc] .text-primary {
        color: #ffffff !important;
      }
      [data-ogsc] .link-primary {
        color: #91add4 !important;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p class="text-primary">Hey!</p>
      <p class="text-primary">Thank you for applying for early access to Midjournal. We're genuinely excited to have you here with us from the very beginning.</p>
      <p class="text-primary">Midjournal is grounded in the belief that the more we understand ourselves, the more gracefully we can move through life — not just as individuals, but as a collective. That's why having you with us from the beginning truly means a lot</p>
      <p class="text-primary">We'll be in touch again when V0 is ready to explore. In the meantime we'd love to learn as much as we can. So if you're up for it, please take a moment to fill out this short product survey – it will help us shape something truly meaningful:</p>
      <p class="text-primary">👉 <a href="https://forms.gle/ReXeBVbKp4bkSsUs6" target="_blank" rel="noopener noreferrer" class="link-primary" style="color: #007bff;">https://forms.gle/ReXeBVbKp4bkSsUs6</a></p>
      <p class="text-primary">Until we chat again – wishing you peace and equanimity.</p>
      <p class="text-primary">Regards,<br>Tom & Connor<br>(Co-founders)</p>
    </div>

    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 450px; margin: 40px auto 0; background-color: #ffffff;">
      <tr>
        <td style="padding: 20px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="135" valign="top">
                <a href="http://www.midjournal.xyz" target="_blank" rel="noopener noreferrer">
                  <img
                    src="${images?.logo_black ?? "cid:logo_black"}"
                    alt="Midjournal Logo"
                    width="115"
                    height="115"
                    style="display: block; border: 0; width: 115px; height: 115px; min-width: 115px;"
                    class="light-img"
                  />
                  <!--[if !mso]><! -->
                  <div
                    class="dark-img"
                    style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;"
                  >
                    <img
                      src="${images?.logo_white ?? "cid:logo_white"}"
                      alt="Midjournal Logo"
                      width="115"
                      height="115"
                      style="display: block; border: 0; width: 115px; height: 115px; min-width: 115px;"
                    />
                  </div>
                  <!--<![endif]-->
                </a>
              </td>
              <td width="21" align="center" valign="middle" style="width: 21px;">
                <div
                  class="separator"
                  style="border-left: 2px solid #000000; height: 66px;"
                ></div>
              </td>
              <td valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td class="text-primary" style="font-family: 'Public Sans', Arial, sans-serif; font-size: 29px; line-height: 34px; padding-top: 5px;">
                      Midjournal
                    </td>
                  </tr>
                  <tr>
                    <td class="text-primary" style="padding-top: 0px; font-family: 'Public Sans', Arial, sans-serif; font-size: 10px; line-height: 12px;">
                      On a mission to illuminate the world of emotion.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 14px;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-right: 5px;">
                            <a href="https://x.com/midjournalxyz" target="_blank" rel="noopener noreferrer">
                              <img src="${
                                images?.x_black ?? "cid:x_black"
                              }" alt="X" width="20" height="20" style="display: block; width: 20px; height: 20px;" class="light-img">
                              <!--[if !mso]><! -->
                              <div class="dark-img" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;">
                                <img src="${
                                  images?.x_white ?? "cid:x_white"
                                }" alt="X" width="20" height="20" style="display: block; width: 20px; height: 20px;">
                              </div>
                              <!--<![endif]-->
                            </a>
                          </td>
                          <td style="padding-right: 5px;">
                            <a href="https://www.tiktok.com/@midjournal.xyz" target="_blank" rel="noopener noreferrer">
                              <img src="${
                                images?.tiktok_black ?? "cid:tiktok_black"
                              }" alt="TikTok" width="18" height="18" style="display: block; width: 18px; height: 18px;" class="light-img">
                              <!--[if !mso]><! -->
                              <div class="dark-img" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;">
                                <img src="${
                                  images?.tiktok_white ?? "cid:tiktok_white"
                                }" alt="TikTok" width="18" height="18" style="display: block; width: 18px; height: 18px;">
                              </div>
                              <!--<![endif]-->
                            </a>
                          </td>
                          <td style="padding-right: 5px;">
                            <a href="https://www.linkedin.com/company/midjournalxyz/" target="_blank" rel="noopener noreferrer">
                              <img src="${
                                images?.linkedin_black ?? "cid:linkedin_black"
                              }" alt="LinkedIn" width="20" height="20" style="display: block; width: 20px; height: 20px;" class="light-img">
                              <!--[if !mso]><! -->
                              <div class="dark-img" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;">
                                <img src="${
                                  images?.linkedin_white ?? "cid:linkedin_white"
                                }" alt="LinkedIn" width="20" height="20" style="display: block; width: 20px; height: 20px;">
                              </div>
                              <!--<![endif]-->
                            </a>
                          </td>
                          <td style="padding-right: 5px;">
                            <a href="https://www.instagram.com/midjournal.xyz" target="_blank" rel="noopener noreferrer">
                              <img src="${
                                images?.instagram_black ?? "cid:instagram_black"
                              }" alt="Instagram" width="19" height="19" style="display: block; width: 19px; height: 19px;" class="light-img">
                              <!--[if !mso]><! -->
                              <div class="dark-img" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;">
                                <img src="${
                                  images?.instagram_white ??
                                  "cid:instagram_white"
                                }" alt="Instagram" width="19" height="19" style="display: block; width: 19px; height: 19px;">
                              </div>
                              <!--<![endif]-->
                            </a>
                          </td>
                          <td>
                            <a href="https://www.facebook.com/midjournal.xyzzz" target="_blank" rel="noopener noreferrer">
                              <img src="${
                                images?.facebook_black ?? "cid:facebook_black"
                              }" alt="Facebook" width="20" height="19" style="display: block; width: 20px; height: 19px;" class="light-img">
                              <!--[if !mso]><! -->
                              <div class="dark-img" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;">
                                <img src="${
                                  images?.facebook_white ?? "cid:facebook_white"
                                }" alt="Facebook" width="20" height="19" style="display: block; width: 20px; height: 19px;">
                              </div>
                              <!--<![endif]-->
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 0px; font-family: 'Public Sans', Arial, sans-serif; font-size: 11px; line-height: 14px;">
                      <a href="http://www.midjournal.xyz" class="text-primary" style="text-decoration: none;">www.midjournal.xyz</a>
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
