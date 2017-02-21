module.exports = {
    // Load Mock Product Data Into localStorage
    get: function() {
        return {
            "header": {
                "leftImgUrl": "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/16a0751d-1991-48ad-bd18-2db132af9baf.png",
                "rightImgUrl": "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/63be9f17-5744-49f3-bbda-cee8454cc2f4.png"
            },
            "hero" : {
                "headline" : "Hi gang,",
                "copy" : `Check out what’s going in and around the office below.  Join in on whatever floats your boat.
<br><br>
Have something you want on blast or an idea for something new?  Give me a shout.
<br><br>
Keep up the rad work.
<br><br>
Hope you all enjoy Super Bowl Sunday. Go Sports!
<br><br>
XO.
<br>
Jules`,
                "imgUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/e82df3d7-374e-4bee-bcf8-4a959c1af176.png"
            },
            "shout" : [
            {
                "subHeadline" : "FEB 8",
                "headline" : "Maker Lab Open House (Party)!",
                "leftIconUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png",
                "leftIconLabel" : "4-5:30pm",
                "rightIconUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png",
                "rightIconLabel" : "Maker Lab",
                "copy" : `Ever wonder what our AKQA wizards (aka creative technologists) have been tinkering away at in the Maker Lab? Well come see for yourself in the Maker Lab Open House (Party) and get the 101 / 411 on all the gadgets, gizmos and VR thing-a-mah-bobs.  All while sipping on civilized refreshments.`,
                "imgUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/eb48d52e-ec6d-4ede-a1c1-17a8de2b8fee.jpg"
            },
            {
                "subHeadline" : "MAR 9",
                "headline" : "AKQA’s Got Talent",
                "leftIconUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png",
                "leftIconLabel" : "4-5:30pm",
                "rightIconUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png",
                "rightIconLabel" : "Cafe",
                "copy" : `Ever wonder what our AKQA wizards (aka creative technologists) have been tinkering away at in the Maker Lab? Well come see for yourself in the Maker Lab Open House (Party) and get the 101 / 411 on all the gadgets, gizmos and VR thing-a-mah-bobs.  All while sipping on civilized refreshments.`,
                "imgUrl" : ""
            },
            {
                "subHeadline" : "THE LATEST",
                "headline" : "He Got Game<br>(Well, used to…)",
                "leftIconUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png",
                "leftIconLabel" : "4-5:30pm",
                "rightIconUrl" : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png",
                "rightIconLabel" : "Cafe",
                "copy" : `Ever wonder what our AKQA wizards (aka creative technologists) have been tinkering away at in the Maker Lab? Well come see for yourself in the Maker Lab Open House (Party) and get the 101 / 411 on all the gadgets, gizmos and VR thing-a-mah-bobs.  All while sipping on civilized refreshments.`,
                "imgUrl" : ""
            }            
            ]
        };
    },
    getHTMLTemplate: function(){
        return {
            "head": `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <title>AKQA AGENCY HAPPENINGS</title>
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="format-detection" content="telephone=no">
  <meta name="format-detection" content="date=no">
  <meta name="format-detection" content="address=no">
  <meta name="format-detection" content="email=no">
  <style type="text/css">
    body { width: 100% !important; background-color: #ffffff; padding: 0; margin: 0; }
    a, a.akqa-link, a.akqa-link:link { text-decoration: none; border: 0; outline: 0; }
    a.akqa-link:hover { text-decoration: underline; }
    table[id=akqa-eyebrow] a, table[id=akqa-footer], *[class=akqa-container] a, #akqa-footer a, a { color: inherit; }
    #mobile-top section, #mobile-bottom section { mso-hide: all; }
    *[class=show_me_always] { visibility: visible; }
    *[class=show_me_always] img { visibility: visible; }
    .preheader-hide { display: none !important; mso-hide: all !important; }
    .subtle-link a,.subtle-link a:hover { color: #333333; text-decoration: none; }
      /*
      Media queries will be ignored by most non-mobile clients.
      Query parameters will further ensure correct targeting.
      */
      /*Fonts*/
      @font-face {
        font-family: 'BentonSans-Bold';
        src: url('img/fonts/BENSBD__.eot'); /* IE9 Compat Modes */
        src: url('img/fonts/BENSBD__.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('img/fonts/BENSBD__.woff') format('woff'), /* Modern Browsers */
        url('img/fonts/BENSBD__.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('img/fonts/BENSBD__.svg#ed8435d366a4ac4bee8ecd80fc76b4b5') format('svg'); /* Legacy iOS */
        font-style:   normal;
        font-weight:  700;
      }
      @font-face {
        font-family: 'BentonSans-Book';
        src: url('img/fonts/BENSBK__.eot'); /* IE9 Compat Modes */
        src: url('img/fonts/BENSBK__.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('img/fonts/BENSBK__.woff') format('woff'), /* Modern Browsers */
        url('img/fonts/BENSBK__.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('img/fonts/BENSBK__.svg#ace0ed135dbc9c8610ca3f0bf5ce3b98') format('svg'); /* Legacy iOS */
        font-style:   normal;
        font-weight:  400;
      }
      @font-face {
        font-family: 'BentonSans-Black';
        src: url('img/fonts/BENSBL__.eot'); /* IE9 Compat Modes */
        src: url('img/fonts/BENSBL__.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('img/fonts/BENSBL__.woff') format('woff'), /* Modern Browsers */
        url('img/fonts/BENSBL__.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('img/fonts/BENSBL__.svg#7d25ed65329d1331bf4549a4ec3951b2') format('svg'); /* Legacy iOS */
        font-style:   normal;
        font-weight:  400;
      }
      @font-face {
        font-family: 'BentonSans-Light';
        src: url('img/fonts/BENSLT__.eot'); /* IE9 Compat Modes */
        src: url('img/fonts/BENSLT__.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('img/fonts/BENSLT__.woff') format('woff'), /* Modern Browsers */
        url('img/fonts/BENSLT__.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('img/fonts/BENSLT__.svg#f78597f6497138650c310eebac22df9c') format('svg'); /* Legacy iOS */
        font-style:   normal;
        font-weight:  200;
      }
      @font-face {
        font-family: 'BentonSans-Medium';
        src: url('img/fonts/BENSMD__.eot'); /* IE9 Compat Modes */
        src: url('img/fonts/BENSMD__.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('img/fonts/BENSMD__.woff') format('woff'), /* Modern Browsers */
        url('img/fonts/BENSMD__.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('img/fonts/BENSMD__.svg#a8060284b02b2442ada7a339eccbdbe3') format('svg'); /* Legacy iOS */
        font-style:   normal;
        font-weight:  400;
      }
      @font-face {
        font-family: 'BentonSans-Regular';
        src: url('img/fonts/BENSR___.eot'); /* IE9 Compat Modes */
        src: url('img/fonts/BENSR___.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('img/fonts/BENSR___.woff') format('woff'), /* Modern Browsers */
        url('img/fonts/BENSR___.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('img/fonts/BENSR___.svg#f50175ba80b800aed21afcc63f3304ef') format('svg'); /* Legacy iOS */
        font-style:   normal;
        font-weight:  400;
      }
      b {
        font-family: 'BentonSans-Medium' ,'Helvetica', 'Arial', sans-serif;
      }
      ul{
        padding-left: 18px !important;
      }
      /* Tablet (not large size, ie. iPad Pro) */
      @media only screen and ( max-device-width: 768px ) {
        * { text-rendering: optimizelegibility; }
        body { -webkit-text-size-adjust: 110%; }
        td { line-height: 1.3em !important; }
        *[class=akqa-container] { -webkit-text-size-adjust: 106%; line-height: 1.2em !important; padding-left: 28px !important; padding-right: 28px !important; }
        #akqa-footer { -webkit-text-size-adjust: 120%; line-height: 1.2em !important; }
      }
      /* Retina Images */
      @media only screen and ( min-device-width: 569px ) and ( -webkit-min-device-pixel-ratio: 2 ), only screen and ( min-device-width: 569px ) and ( min-device-pixel-ratio: 2 ) {
        img { visibility: hidden; }
        *[class=more] { visibility: visible; }
        *[class=more], *[class~=akqa-link] img { visibility: visible !important; }
        *[class=sf-title]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/c85492e6-d625-478b-ac95-2c513fc5df6f.png') no-repeat top left;
          background-size:227px 31px;
        }

        *[class=sf-logo]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/03144d50-7418-4217-8b8d-c32263adef9a.png') no-repeat top right;
          background-size:37px 37px;
        }



        *[class=sm-pic]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/98014164-926c-4345-b9cf-67b2237f8d72.jpg') no-repeat top center;
          background-size:220px 171px;
        }
        *[class=icon-women]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/9c5d69c6-4b80-4d1a-833e-12e7075ebfab.png') no-repeat top left;
          background-size:44px 45px;
        }

        *[class=icon-plank]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/3baa0128-38fd-4c94-a5ae-a64a1f142d9d.png') no-repeat top left;
          background-size:58px 44px;
        }

        *[class=icon-climb]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/032bc49f-36c9-401a-8b46-273f577570d1.png') no-repeat top left;
          background-size:67px 45px;
        }

        *[class=icon-design]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/468a9115-39ec-49a4-9500-ba3413fbe557.png') no-repeat top left;
          background-size:44px 45px;
        }

        *[class=icon-lifters]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/a651f7d3-b6f2-445e-b9f3-0955f72a6055.png') no-repeat top left;
          background-size:60px 45px;
        }

        *[class=icon-soccer]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/e242e28e-4f36-477c-beed-13c844a836c4.png') no-repeat top left;
          background-size:41px 45px;
        }

        *[class=icon-karma]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/92a656e1-8c12-41a8-80f5-628b00957ad6.png') no-repeat top left;
          background-size:50px 45px;
        }

        *[class=icon-run]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/80589f78-f6ad-4be7-8808-03ff0941fc20.png') no-repeat top left;
          background-size:50px 45px;
        }

        *[class=social-fb]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/937de44f-9d00-4467-b0b8-08a18c9d071f.png') no-repeat top center;
          background-size:21px 29px;
        }

        *[class=social-twitter]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/d786058b-3a77-4963-b232-033e4ee39e63.png') no-repeat top center;
          background-size:23px 29px;
        }

        *[class=social-google]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/1af75ba9-adb1-4f3c-9a19-622c68f651d9.png') no-repeat top center;
          background-size:24px 29px;
        }

        *[class=social-insta]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/13c8988c-4850-43ea-91a1-48829ca8ec14.png') no-repeat top center;
          background-size:24px 29px;
        }

        *[class=social-linked]{
          background:url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/862463f3-b8de-4c18-b5af-a572bb03d53e.png') no-repeat top center;
          background-size:22px 29px;
        }
      }
      /* Mobile Styles */
      @media only screen and (max-device-width: 568px) {
        *[id=desktop] { display: none !important; }
        *[id=mobile-top] { width: 100% !important; max-width: 100% !important; background: #ffffff; max-height: none !important; float: none !important; overflow: visible !important; height: inherit !important; display: block !important; margin: 0 auto !important; }
        *[id=mobile-bottom] { width: 100% !important; max-width: 100% !important; max-height: none !important; float: none !important; overflow: visible !important; height: inherit !important; display: block !important; margin: 0 auto !important; }
        *[id=mobile-wrapper] { width: 100% !important; max-width: 100% !important; background: #ffffff; max-height: none !important; float: none !important; overflow: visible !important; height: inherit !important; display: block !important; margin: 0 auto !important; }
        /* RESET */
        html, body, div, ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, fieldset, input, abbr, article, aside, command, details, figcaption, figure, footer, header, hgroup, mark, meter, nav, output, progress, section, summary, time { margin: 0; padding: 0 }
        h1, h2, h3, h4, h5, h6, pre, code, address, caption, cite, code, em, strong, th, figcaption { font-size: 1em; font-weight: normal; font-style: normal }
        fieldset, iframe { border: none }
        caption, th { text-align: left }
        table { border-collapse: collapse; border-spacing: 0 }
        article, aside, footer, header, hgroup, nav, section, figure, figcaption { display: block }
        body { background-color: #ffffff; min-width: 320px !important }
        sup { line-height: 0; font-size: 70%; }
        /* mobile layout */
        .mobile { width: 100%; font-family:'BentonSans-Book', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; color: #333333; font-size: 14px; line-height: 1.4em; font-weight: 400; -webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; text-rendering: optimizelegibility; text-align: left; background-color: #ffffff; }
        .mobile img { display: block; background-position: 50% 0; background-repeat: no-repeat; background-size: 100% 100%; margin: auto; }
        .mobile div.body { width: 100% !important; max-width: 414px !important; max-height: none !important; float: none !important; overflow: hidden; position: relative; margin: 0 auto; background-color: #ffffff; }
        .mobile-bottom { background-color: #ffffff; }
        .mobile-bottom div.body { padding-top: 0; background-color: #ffffff; }
        .mobile-bottom div.body p { padding: 0; }
        .mobile .divider { border-top: 1px solid #c7c7c7; margin: 50px 5% 30px; }
        /*content*/
        .mobile .m-happenings {  padding-top: 20px; }
        .mobile h1 {font-family:'BentonSans-light','Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 26px; margin: 0 0 20px; line-height: 33px;}
        .mobile h3 {font-family:'BentonSans-Bold','Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 14px; margin: 40px 0 0; line-height: 33px;}
        .mobile .m-header { margin: 10px 5% 0;border-bottom: solid 2px #000; height: 50px; }
        .mobile .main-title { margin-top: 12px; }
        .mobile .content { margin: 0 5% 20px; }
        .mobile .main-title, .mobile .sf-icon { display: inline-block; width:50%; }
        .mobile .sf-icon {float: right; }
        /* hero */
        .mobile .m-hero { padding-bottom: 35px; }
        .mobile .main-image { overflow: hidden; width: 100%; height: 360px; background: url('https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/e82df3d7-374e-4bee-bcf8-4a959c1af176.png') no-repeat center center; background-size: 360px 360px;}
        /* news */
        .mobile .news-block { border-top: solid 1px #c7c7c7; padding-bottom: 40px; padding-top: 30px; }
        .mobile h2 {font-family:'BentonSans-Medium','Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 20px; line-height: 25px; }
        .mobile .news-block h2 { margin: 10px 0 15px; }
        .mobile .news-block:first-of-type { border-top: none; }
        .mobile .date {font-family:'BentonSans-Medium','Helvetica Neue', 'Helvetica', 'Arial', sans-serif; color: #c7c7c7;font-size: 14px; margin: 0 0 10px; }
        .mobile .td-holder { margin: 20px 0;}
        .mobile .td-holder > div { display: inline-block;}
        .mobile .td-holder .time { width: 130px;}
        /*Activities*/
        .mobile .activities-block {  padding-bottom: 0px; padding-top: 25px; }
        .mobile .activities-block h2 { margin-top: 0; font-size: 17px;}
        .mobile .activities-block .activity { padding-top: 20px;padding-bottom: 20px;  border-top: solid 1px #c7c7c7; }
        .mobile .activities-block .activity:first-of-type { border-top: none; }
        .mobile .activities-block .activity .td-holder { margin: 10px 0;}
        .mobile .activities-block .date {  border-bottom: solid 2px #000000; padding-bottom: 5px; margin: 0;}
        /*Clubs*/
        .mobile .clubs .content { border-top: double 4px #c7c7c7; border-bottom: double 4px #c7c7c7; padding-bottom: 30px;}
        .mobile .club-block { margin: 0 0 15px; }
        .mobile .club-block h2 { margin: 0 0 10px; font-size: 17px;}
        .mobile .club-block .icon { display: inline-block; margin: 20px 0 10px;}
        /* suppress iOS highlighting for dates and addresses */
        /*.mobile .subtle-link a { color: #333333; text-decoration: none; }*/
        /*!* mobile footer styles *!*/
        .mobile .footer {}
        .mobile .footer .logos-holder .social img { display: inline-block; margin-right: 2px; }
        .mobile .footer .logos-holder .logo { display: inline-block; float: right;}
      }
    </style>
    <!--[if gte mso 9]>
    <style type="text/css">
      /*table, td, div, p { font-family: Lucida Sans, Lucida Sans Unicode, Lucida Grande, Arial, Helvetica, Verdana, sans-serif !important; line-height: normal !important }*/
      /*sup { font-size: 100% !important; }*/
      .outlook-leading { line-height: 18px; !important }
    </style>
    <![endif]-->
    <!--[if lte mso 7]>
    <style type="text/css">
      table, td, div, p { font-family: BentonSans-Book,  Arial, Helvetica, Verdana,Lucida Grande, Lucida Sans, Lucida Sans Unicode, sans-serif !important; line-height: normal }
    </style>
    <![endif]-->
  </head>
    <body style="margin:0; padding:0;">
            `,
            "desktop" : `

    <!-- DESKTOP VERSION -->
    <div id="desktop" style="display:table; width:100%; border-spacing:0; border-collapse:collapse; margin:auto 0; background-color:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="margin: 0 auto;background-color:#ffffff;">
        <tr>
          <td align="center" class="akqa-container" style="padding:12px 20px 0px 20px;">
            <!-- Agency Happenings intro -->
            <table width="700" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style=" background-color: #ffffff;">
              <tr>
                <!--top header-->
                <td align="center" valign="top" style="border-bottom: 3px solid #000;">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tr>
                      <td align="left" style="padding-bottom: 5px;">
                        <div style="font-family:Arial,Helvetica Neue,Lucida Sans Unicode, sans-serif; font-size: 22px; line-height: 18px; color: #000; -webkit-font-smoothing: antialiased;letter-spacing:-0.01em;">
                          <!--Agency Title-->
                          <div class="show_me_always">
                           <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/16a0751d-1991-48ad-bd18-2db132af9baf.png" width="227" height="31" style="display:block; margin:0;" border="0" alt="AGENCY HAPPENINGS">
                         </div>
                       </div>
                     </td>
                     <td align="right" style="padding-bottom: 10px;">
                      <div class="show_me_always">
                       <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/63be9f17-5744-49f3-bbda-cee8454cc2f4.png" width="37" style="display:block; margin:0;" border="0" alt="SF">
                     </div>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
           <tr>
            <!--content-->
            <td align="center" style="vertical-align: top;padding-top: 40px;padding-bottom: 40px;border-bottom: 1px solid #c7c7c7;">
              <table width="700" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left" style="padding-right: 30px;vertical-align: top;">
                    <!--Agency Content here: JULES EDIT-->
                    <h1 style="font-family: BentonSans-Light, Arial,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 28px; line-height: 34px;font-weight: normal; -webkit-font-smoothing: antialiased; color:#000000;padding-top: 0;">
                      <hero-headline>
                    </h1>
                    <div class="outlook-leading" style="font-family: BentonSans-Book, Arial,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em; ">
                      <p>
                        <hero-copy>
                      </p>
                    </div>
                  </td>
                  <td align="right" style="vertical-align: top;" height="40">
                    <!--Agency Photo here: JULES EDIT-->
                    <div class="show_me_always">
                     <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/e82df3d7-374e-4bee-bcf8-4a959c1af176.png" width="340" style="display:block; margin:0;" border="0" alt="">
                   </div>
                 </td>
               </tr>
             </table>
           </td>
         </tr>
         <tr>
          <!--double lines-->
          <td align="center" style="vertical-align: top;padding-top: 2px;border-bottom: 1px solid #c7c7c7;"></td>
        </tr>
      </table>
      <!-- SHOUT OUTS -->
      <table width="700" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style="margin: 0 auto;background-color: #ffffff;">
        <tr>
          <td align="center" valign="top">
            <table width="700" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <!--Headline-->
                <td align="left" valign="top" style="padding-top: 15px;">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: 0.14em; ">
                    SHOUT OUTS
                  </div>
                </td>
              </tr>

              <tr>
                <!--SO block#1 has picture-->
                <td align="left" valign="top" style="padding-top: 20px;padding-bottom: 20px;border-bottom: 1px solid #c7c7c7;">
                 <!--With picture-->
                 <table width="700" border="0" cellspacing="0" cellpadding="0">
                   <tr>
                     <td align="left" width="480" style="vertical-align: top;padding-right: 20px;">
                      <!--header-->
                      <table width="480" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="240">
                            <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#a3a3a3;letter-spacing: -0.01em;">
                              FEB 8
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;" height="25" width="115">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                             <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png" class="show_me_always" width="12" height="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
                             4-5:30pm
                           </div>
                         </td>
                         <td align="left" style="vertical-align: top;">
                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png" class="show_me_always" width="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
                            Maker Lab
                          </div>
                        </td>
                      </tr>
                    </table>
                    <!--content-->
                    <table width="480" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left" style="vertical-align: top;;" width="240">
                          <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 22px; line-height: 30px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            Maker Lab<br>Open House (Party!)
                          </div>
                        </td>
                        <td align="left" style="vertical-align: top;">
                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 20px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            Ever wonder what our AKQA wizards (aka creative technologists) have been tinkering away at in the Maker Lab? Well come see for yourself in the Maker Lab Open House (Party) and get the 101 / 411 on all the gadgets, gizmos and VR thing-a-mah-bobs.  All while sipping on civilized refreshments.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="left" style="vertical-align: top;padding-top: 30px;">
                   <div class="show_me_always">
                    <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/eb48d52e-ec6d-4ede-a1c1-17a8de2b8fee.jpg" width="200" style="display:block; margin:0;" border="0" alt="" />
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <!--SO block#2-->
          <td align="left" valign="top" style="padding-top: 20px;padding-bottom: 20px;border-bottom: 1px solid #c7c7c7;">
            <!--header-->
            <table width="700" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" style="vertical-align: top;" width="240">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#a3a3a3;letter-spacing: -0.01em;">
                    MAR 9
                  </div>
                </td>
                <td align="left" style="vertical-align: top;" height="25" width="115">
                  <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png" class="show_me_always" width="12" height="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
                    4:30-5:30pm
                  </div>
                </td>
                <td align="left" style="vertical-align: top;">
                  <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png" class="show_me_always" width="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
                    Cafe
                  </div>
                </td>
              </tr>
            </table>
            <!--content-->
            <table width="700" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" style="vertical-align: top;;" width="240">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 22px; line-height: 30px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    AKQA’s Got Talent
                  </div>
                </td>
                <td align="left" style="vertical-align: top;">
                  <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 20px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                   Calling all talent entries now – let me know if you’re in. Can you juggle bowling pins? Play the Star Wars theme on trombone?  Breakdance? Recite poetry? Sing like an angel? Are you a long lost member of the Wild Stallions air guitar band? A contortionist? Have any sort of talent – unusual, hard-earned or otherwise you want to share with the world? Well WE want to see it. Join us for the AKQA 4th annual Talent Show on Thur March 9th. Café, with beverages.                              </div>
                 </td>
               </tr>
             </table>
           </td>
         </tr>
         <tr>
          <!--SO block#3-->
          <td align="left" valign="top" style="padding-top: 20px;padding-bottom: 20px;border-bottom: 1px solid #c7c7c7;">
            <!--header-->
            <table width="700" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" style="vertical-align: top;" width="240">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#a3a3a3;letter-spacing: -0.01em;">
                    THE LATEST
                  </div>
                </td>
                <td align="left" style="vertical-align: top;" height="25" width="115">
                  <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png" class="show_me_always" width="12" height="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
                    After Work
                  </div>
                </td>
                <td align="left" style="vertical-align: top;">
                  <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png" class="show_me_always" width="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
                    The Court
                  </div>
                </td>
              </tr>
            </table>
            <!--content-->
            <table width="700" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" style="vertical-align: top;" width="240">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 22px; line-height: 30px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                   He Got Game<br/> (Well, used to…)
                 </div>
               </td>
               <td align="left" style="vertical-align: top;">
                <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 20px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                 Are you a paunchy [sic], over-the-hill-ish hoopster that’s interested in playing pick-up basketball after work? Let Luis Jimenez and Chris Mezzetta know. They’re starting the conversation now to see if there’s interest and will take it from there to sort details.                              </div>
               </td>
             </tr>
           </table>
         </td>
       </tr>
       <tr>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <!--double lines-->
  <td align="center" style="vertical-align: top;padding-top: 2px;border-bottom: 1px solid #c7c7c7;"></td>
</tr>
</table>
<!-- ACTIVITY -->
<table width="700" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style="margin: 0 auto;background-color: #ffffff;">
  <tr>
    <td align="center" valign="top" style="border-bottom: 1px solid #c7c7c7;">
      <!--Top Header-->
      <table width="700" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <!--Headline-->
          <td align="left" valign="top" style="padding-top: 15px;padding-bottom: 20px;">
            <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: 0.13em; ">
              ACTIVITIES
            </div>
          </td>
        </tr>
      </table>
      <!--Activity Row #1 MON & TUES-->
      <table width="700" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <!--Monday-->
          <td align="left" width="340" valign="top" style="padding-bottom: 25px;">
            <table width="340" border="0" cellspacing="0" cellpadding="0">
              <!--Title-->
              <tr>
                <td align="left" style="vertical-align: top;padding-top: 10px;padding-bottom: 4px;border-bottom: 3px solid #000000;" width="240">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#7f7f7f;letter-spacing: -0.01em;">
                    MONDAY
                  </div>
                </td>
              </tr>
              <tr>
                <!--breakfast-->
                <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="left" style="vertical-align: top;" width="85">
                        <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                          Breakfast
                        </div>
                      </td>
                      <td align="left" style="vertical-align: top;" width="160">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="left" style="vertical-align: top;" width="160">
                              <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                                Morning
                              </div>
                            </td>
                            <td align="left" style="vertical-align: top;">
                              <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                                Cafe
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                              <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                               Breakfast it up with us every Monday morning in the Café. Special Breakfast will be last Monday of every month (so, Feb 27th).
                             </div>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
               </td>
             </tr>
             <tr>
              <!--guided meditation-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Guided<br>
                        Meditation
                        <!--meditation moved to another line-->
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              12:00 - 12:30pm
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Studio
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Newbies welcome. Ask <b>Sterling</b> to join our AKQA meditation slack channel.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!--middle column-->
        <td align="left" width="10" valign="top"></td>
        <!--Tuesday-->
        <td align="left" width="340" valign="top" style="padding-bottom: 25px;">
          <table width="340" border="0" cellspacing="0" cellpadding="0">
            <!--Title-->
            <tr>
              <td align="left" style="vertical-align: top;padding-top: 10px;padding-bottom: 4px;border-bottom: 3px solid #000000;" width="240">
                <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#7f7f7f;letter-spacing: -0.01em;">
                  TUESDAY
                </div>
              </td>
            </tr>
            <tr>
              <!--Run SF-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        AKQA<br>
                        Runs SF
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Noon
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Cafe
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Meet outside the main lobby. Showers + towels on the main floor.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!--Acupuncture-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Acupuncture
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              30mins
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Muir
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Every other Tues with Jes Davies. Sign up <a href="https://www.schedulicity.com/scheduling/JDAGJ5/services" target="_blank">here</a>. Sessions are 30 minutes and only costs ya $15.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!--yoga-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Yoga
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              5:30 - 6:30pm
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Muir
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Tues 5:30-6:30pm and Fri 12-1pm. Mats + props provided. In Muir unless we holler otherwise.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--Activity Row #2 WED & THURS-->
    <table width="700" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <!--Wed-->
        <td align="left" width="340" valign="top" style="padding-bottom: 25px;">
          <table width="340" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <!--Title-->
              <td align="left" style="vertical-align: top;padding-top: 10px;padding-bottom: 4px;border-bottom: 3px solid #000000;" width="240">
                <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#7f7f7f;letter-spacing: -0.01em;">
                  WEDNESDAY
                </div>
              </td>
            </tr>
            <tr>
              <!--Guided Meditation wioth -->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Guided<br>
                        Meditation
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              12-12:30pm
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Studio
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Newbies welcome. Ask <b>Streling</b> to join our AKQA meditation slack channel.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!--Green Draaank-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Green<br>Draaank
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Afternoon
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Cafe
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Pop-up smoothies mysteriously appear, made by your super cool volunteer colleagues.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!--middle column-->
        <td align="left" width="10" valign="top"></td>
        <!--Thursday-->
        <td align="left" width="340" valign="top" style="padding-bottom: 25px;">
          <table width="340" border="0" cellspacing="0" cellpadding="0">
            <!--Title-->
            <tr>
              <td align="left" style="vertical-align: top;padding-top: 10px;padding-bottom: 4px;border-bottom: 3px solid #000000;" width="240">
                <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#7f7f7f;letter-spacing: -0.01em;">
                  THURSDAY
                </div>
              </td>
            </tr>
            <tr>
              <!--Chair Massages-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Chair<br>
                        Massages
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              All Day
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Studio
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              20 minutes per sesh.  AKQA covers most of the cost, so you just pay 10 bucks. Hope you get a good rub down.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!--Run SF-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        AKQA<br>
                        Runs SF
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Noon
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Cafe
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Meet outside the main lobby. Showers + towels on the main floor.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!--Tara Firma-->
              <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" style="vertical-align: top;" width="85">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Tara Firma<br>
                        Farms
                      </div>
                    </td>
                    <td align="left" style="vertical-align: top;" width="160">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="left" style="vertical-align: top;" width="160">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Afternoon
                            </div>
                          </td>
                          <td align="left" style="vertical-align: top;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Doorstep
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                             Support your local, sustainable farmers and get food right at our doorstep. More info on membership
                           </div>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
         </table>
       </td>
     </tr>
   </table>
   <!--Activity Row #3 FRI & MONTHLY-->
   <table width="700" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <!--Fri-->
      <td align="left" width="340" valign="top" style="padding-bottom: 25px;">
        <table width="340" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <!--Title-->
            <td align="left" style="vertical-align: top;padding-top: 10px;padding-bottom: 4px;border-bottom: 3px solid #000000;" width="240">
              <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#7f7f7f;letter-spacing: -0.01em;">
                FRIDAY
              </div>
            </td>
          </tr>
          <tr>
            <!--yoga-->
            <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;border-bottom: 1px solid #c7c7c7;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left" style="vertical-align: top;" width="85">
                    <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                      Yoga
                    </div>
                  </td>
                  <td align="left" style="vertical-align: top;" width="160">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left" style="vertical-align: top;" width="160">
                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            12-1pm
                          </div>
                        </td>
                        <td align="left" style="vertical-align: top;">
                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            Muir
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                           Tues 5:30-6:30pm and Fri 12-1pm. Mats + props provided. In Muir unless we holler otherwise.
                         </div>
                       </td>
                     </tr>
                   </table>
                 </td>
               </tr>
             </table>
           </td>
         </tr>
         <tr>
          <!--Guided Meditation -->
          <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" style="vertical-align: top;" width="85">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    Guided<br>
                    Meditation
                  </div>
                </td>
                <td align="left" style="vertical-align: top;" width="160">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="left" style="vertical-align: top;" width="160">
                        <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                          1:00pm
                        </div>
                      </td>
                      <td align="left" style="vertical-align: top;">
                        <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                          Studio
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                        <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                          Newbies welcome. Ask <b>Sterling</b> to join our AKQA meditation slack channel.
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <!--middle column-->
    <td align="left" width="10" valign="top"></td>
    <!--Monthly-->
    <td align="left" width="340" valign="top" style="padding-bottom: 25px;">
      <table width="340" border="0" cellspacing="0" cellpadding="0">
        <!--Title-->
        <tr>
          <td align="left" style="vertical-align: top;padding-top: 10px;padding-bottom: 4px;border-bottom: 3px solid #000000;" width="240">
            <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#7f7f7f;letter-spacing: -0.01em;">
              MONTHLY
            </div>
          </td>
        </tr>
        <tr>
                          </tr>
                          <tr>
                            <!--Hair Did-->
                            <td align="left" height="105" style="vertical-align: top;padding-top: 12px;padding-bottom: 15px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="left" style="vertical-align: top;" width="85">
                                    <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                                      Get your<br>
                                      Hair Did
                                    </div>
                                  </td>
                                  <td align="left" style="vertical-align: top;" width="160">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="left" style="vertical-align: top;" width="160">
                                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                                            5:30 - 6:30pm
                                          </div>
                                        </td>
                                        <td align="left" style="vertical-align: top;">
                                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                                            Studio
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" style="vertical-align: top;padding-top: 5px;" colspan="2">
                                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                                            Men $40 / Women’s $50 (Bangs $10). Reception sent sign-up link out this week.
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <!--double lines-->
                <td align="center" style="vertical-align: top;padding-top: 2px;border-bottom: 1px solid #c7c7c7;"></td>
              </tr>
            </table>
            <!-- CLUBS -->
            <table width="700" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style="margin: 0 auto;background-color: #ffffff;">
              <tr>
                <td align="center" valign="top" style="border-bottom: 1px solid #c7c7c7;">
                  <table width="700" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <!--Headline-->
                      <td align="left" valign="top" style="padding-top: 15px;padding-bottom: 20px;">
                        <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: 0.13em; ">
                          CLUBS
                        </div>
                      </td>
                    </tr>
                  </table>
                  <!--Clubs Row 1-->
                  <table width="700" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="left" width="200" valign="top" style="padding-bottom: 25px;">
                        <!--Design Club-->
                        <table width="204" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <!--Icon-->
                            <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                              <div class="icon-design">
                               <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/f9727cf6-51d1-485a-9df9-3f83675d2bd3.png" width="44" style="display:block; margin:0;" border="0" alt="">
                             </div>
                           </td>
                         </tr>
                         <tr>
                          <!--Title-->
                          <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                            <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              Design Club
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <!--Content-->
                          <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                              This monthly meet-up is back if full effect. If you’re not on it and wanna be, hit up <b>Nate Scott</b>. All black attire strongly encouraged but not mandatory.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <!--middle column-->
                    <td align="left" width="2%" valign="top">
                      &nbsp;
                    </td>
                    <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
                      <!--Women For Women-->
                      <table width="204" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <!--Icon-->
                          <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                            <div class="icon-women">
                             <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/a1ff15d1-a418-4d4d-b0c6-c9588611ff82.png" width="44" style="display:block; margin:0;" border="0" alt="">
                           </div>
                         </td>
                       </tr>
                       <tr>
                        <!--Title-->
                        <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                          <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            Women for Women
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <!--Content-->
                        <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                          <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                            <a href="https://en.wikipedia.org/wiki/Stefy_Bau" target="_blank">Stefy Bau</a> the Italian professional motocross racer and consummate bad ass babe will be speaking to the W4W on <b>Feb 8th from 12-1pm</b> down in Sunnyvale with a satellite stream into the SF office. Ask for <b>Michelle Lassman</b> for the invite.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <!--middle column-->
                  <td align="left" width="2%" valign="top">
                    &nbsp;
                  </td>
                  <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
                    <!--Karma Crew-->
                    <table width="204" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <!--Icon-->
                        <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                          <div class="icon-karma">
                           <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/bcec3ceb-4840-46b7-97c0-887bbf6c1106.png" width="50" style="display:block; margin:0;" border="0" alt="">
                         </div>
                       </td>
                     </tr>
                     <tr>
                      <!--Title-->
                      <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                        <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                          Karma Crew
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <!--Content-->
                      <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                        <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                          Hit <b>me</b> up for overall club interest or to share volunteer ideas/inspiration. Looking for volunteers to join us at the <u><a href="https://www.sfmfoodbank.org/volunteer/" target="_blank">SF Marin Food Bank</a></u> for our monthly night there – next up if Wed Feb 15 from 6-8pm.  Please let me know if you want to join the helping-in-hairnets party.
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!--Clubs Row 2-->
            <table width="700" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
                  <!--Climbing Club-->
                  <table width="204" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <!--Icon-->
                      <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                        <div class="icon-climb">
                         <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/931c4443-0301-44e1-a2ec-6d3ce986bd9b.png" width="67" height="45" style="display:block; margin:0;" border="0" alt="">
                       </div>
                     </td>
                   </tr>
                   <tr>
                    <!--Title-->
                    <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                      <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        Climbing Club
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <!--Content-->
                    <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                      <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                        To get a Touchstone membership or join the climbers' email distro list hit up <b>Bobby Caplin. Nidhi Reddy</b> is the organizer for small after work groups, give her a shout if you're interested.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <!--middle column-->
              <td align="left" width="2%" valign="top">
                &nbsp;
              </td>
              <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
                <!--AKQA Lifters-->
                <table width="204" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!--Icon-->
                    <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                      <div class="icon-lifters">
                       <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/104d8080-7a64-49fe-b8d2-0f1800e6986a.png" width="60" height="45" style="display:block; margin:0;" border="0" alt="">
                     </div>
                   </td>
                 </tr>
                 <tr>
                  <!--Title-->
                  <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                    <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                      AKQA Lifters
                    </div>
                  </td>
                </tr>
                <tr>
                  <!--Content-->
                  <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                    <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                      Get swole at Crunch over lunch (that rhymes). If you want to get jacked, tell <b>Ryan Brock</b> and he’ll add you to the Slack channel.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
            <!--middle column-->
            <td align="left" width="2%" valign="top">
              &nbsp;
            </td>
            <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
              <!--Soccer Team-->
              <table width="204" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <!--Icon-->
                  <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                    <div class="icon-soccer">
                     <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/b1065b7d-29a8-4074-a9be-2ca00ed22541.png" width="41" style="display:block; margin:0;" border="0" alt="">
                   </div>
                 </td>
               </tr>
               <tr>
                <!--Title-->
                <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                  <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    Soccer Team
                  </div>
                </td>
              </tr>
              <tr>
                <!--Content-->
                <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                  <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                    Want to join an AKQA soccer league?  <b>Laurent Linville</b> is your man.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!--Clubs Row 3-->
      <table width="700" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
            <!--AKQA Runs SF-->
            <table width="204" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <!--Icon-->
                <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                  <div class="icon-run">
                   <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/cda3af2d-86bd-4080-9b44-fa39c7d842c7.png" width="50" height="45" style="display:block; margin:0;" border="0" alt="">
                 </div>
               </td>
             </tr>
             <tr>
              <!--Title-->
              <td align="left" style="vertical-align: top;padding-bottom: 10px;">
                <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                  AKQA Runs SF
                </div>
              </td>
            </tr>
            <tr>
              <!--Content-->
              <td align="left" style="vertical-align: top;padding-bottom: 15px;">
                <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
                  Join our run club every Tues and Thur at noon, meet outside the main lobby.  Showers + towels on the main floor.
                </div>
              </td>
            </tr>
          </table>
        </td>
        <!--middle column-->
        <td align="left" width="2%" valign="top">
          &nbsp;
        </td>
        <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
          <!--Plank Club-->
          <table width="204" border="0" cellspacing="0" cellpadding="0">
            <tr>
             <!--Icon-->
             <td align="left" style="vertical-align: top;padding-bottom: 10px;">
              <div class="icon-plank">
               <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/55fae936-3e93-43d0-81e1-0b94c38cbf37.png" width="58" height="44" style="display:block; margin:0;" border="0" alt="">
             </div>
           </td>
         </tr>
         <tr>
           <!--Title-->
           <td align="left" style="vertical-align: top;padding-bottom: 10px;">
            <div class="outlook-leading" style="font-family: BentonSans-Medium, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 13px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
              Plank Club
            </div>
          </td>
        </tr>
        <tr>
          <!--Content-->
          <td align="left" style="vertical-align: top;padding-bottom: 15px;">
            <div class="outlook-leading" style="font-family: BentonSans-Book, Arial ,Lucida Grande,Helvetica Neue,Lucida Sans Unicode, Verdana,sans-serif; font-size: 12px; line-height: 18px; -webkit-font-smoothing: antialiased; color:#000000;letter-spacing: -0.01em;">
             Need a little afternoon energy boost? Come plank with us.  In/out/jacked in under 10 minutes. 3pm-ish; in Garcia. <b>Cody Lucas</b> is your contact if you
             want in.
           </div>
         </td>
       </tr>

     </table>
   </td>

   <!--middle column-->
   <td align="left" width="2%" valign="top">
    &nbsp;
  </td>
  <td align="left" width="204" valign="top" style="padding-bottom: 25px;">
    &nbsp;
  </td>
</tr>
</table>
</td>
</tr>
</table>
<!-- Footer -->
<table width="700" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style="margin: 0 auto;">
  <tr>
    <td align="left" valign="top" style="padding-top: 20px;padding-bottom: 20px;">
      <table width="700" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff">
        <tr>
          <!--Social Icons-->
          <td align="left" width="300" valign="top">
            <table cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style="margin: 0;padding: 0;">
              <tr>
                <!--fb-->
                <td align="left" valign="top" style="padding-right: 10px;">
                  <div class="social-fb">
                    <a href="https://www.facebook.com/akqa" target="_blank">
                     <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/b45df5b8-4d05-472a-945b-b24a3f9bf06b.png" width="21" height="29" style="display:block; margin:0;" border="0" alt="">
                   </a>
                 </div>
               </td>
               <!--twitter-->
               <td align="left" valign="top" style="padding-right: 10px;">
                <div class="social-twitter">
                  <a href="https://www.twitter.com/akqa" target="_blank">
                    <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/3f9ef37d-b436-4d04-9e44-1497c7325d48.png" width="23" height="29" style="display:block; margin:0;" border="0" alt="">
                  </a>
                </div>
              </td>
              <!--google-->
              <td align="left" valign="top" style="padding-right: 10px;">
                <div class="social-google">
                  <a href="https://plus.google.com/+Akqaplus" target="_blank">
                   <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/8762e3cf-8b22-4fb7-b7b9-0ea7b33e4c54.png" width="24" height="29" style="display:block; margin:0;" border="0" alt="">
                 </a>
               </div>
             </td>
             <!--instagram-->
             <td align="left" valign="top" style="padding-right: 12px;">
              <div class="social-insta">
                <a href="https://www.instagram.com/akqa" target="_blank">
                 <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/25bf2d0b-5af7-4584-99a3-a6d2f7a80f73.png" width="24" height="29" style="display:block; margin:0;" border="0" alt="">
               </a>
             </div>
           </td>
           <!--Linked in-->
           <td align="left" valign="top" >
            <div class="social-linked">
              <a href="https://www.linkedin.com/company/akqa" target="_blank">
                <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/bd9499e8-3aa0-43de-a1cf-5551b0482af9.png" width="22" height="29" style="display:block; margin:0;" border="0" alt=""></a>
              </div>
            </td>
          </tr>
        </table>
      </td>
      <!--AKQA Logo-->
      <td align="right" valign="top">
        <a href="http://www.akqa.com" target="_blank">
          <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/8a3ac93e-a011-4d27-8024-35e806db72b6.png" class="show_me_always" width="75" height="36" style="display:block; margin:0;" border="0" alt="">

        </a>
      </td>
    </tr>
  </table>
</td>
</tr>
</table>
</td>
</tr>
<!-- bottom spacer -->
<tr>
  <td height="46" bgcolor="#ffffff">&nbsp;</td>
</tr>
</table>

</div>

            `,
            "mobile" : `

<!-- MOBILE VERSION -->
<div id="mobile-top" class="mobile mobile-top" style="width:0; height:0; max-height:0; float:left; overflow:hidden; display: none; ">
  <div class="body">
    <!--Agency Happenings-->
    <section class="m-header" style="border-bottomn: 2px solid #000">
     <div class="main-title"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/759dbda9-5201-4be3-a050-c8f950f7f610.png" width="205" alt=""></div>
     <div class="sf-icon"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/4cbfaf37-bf44-4316-b5a3-61c73003fdf9.png" align="right" width="35" alt=""></div>
   </section>
   <section class="m-happenings">
    <div class="content">
      <!--Agency Content here: JULES EDIT-->
      <h1>
        Hi gang,
      </h1>
      <p>
       Check out what’s going in and around the office below.  Join in on whatever floats your boat.
       <br><br>
       Have something you want on blast or an idea for something new?  Give me a shout.
       <br><br>
       Keep up the rad work.
       <br><br>
       Hope you all enjoy Super Bowl Sunday. Go Sports!
       <br><br>
       XO.
       <br>
       Jules
     </p>
   </div>
   <div class="main-image">
   </div>
 </section>
 <section class="shouts">
  <div class="content">
    <h3>SHOUT OUTS</h3>

    <!--news block 1-->
    <div class="news-block">
      <div class="date">FEB 8</div>
      <h2>
        Maker Lab<br>Open House (Party!)
      </h2>
      <!-- add a option to hide this-->
      <div class="td-holder">
        <div class="time">
         <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png" class="show_me_always" width="12" height="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
         4-5:30pm
       </div>
       <div class="location">
        <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png" class="show_me_always" width="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
        Maker Lab
      </div>
    </div>
    <div class="news-content">
      Ever wonder what our AKQA wizards (aka creative technologists) have been tinkering away at in the Maker Lab? Well come see for yourself in the Maker Lab Open House (Party) and get the 101 / 411 on all the gadgets, gizmos and VR thing-a-mah-bobs.  All while sipping on civilized refreshments.
    </div>
    <div style="text-align: center; padding-top: 10px;">
      <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/eb48d52e-ec6d-4ede-a1c1-17a8de2b8fee.jpg" class="show_me_always" width="350"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>

    </div>
  </div>
  <!--news block 2-->
  <div class="news-block">
    <div class="date">MAR 9</div>
    <h2>
      AKQA’s Got Talent
    </h2>
    <!-- add a option to hide this-->
    <div class="td-holder">
      <div class="time">
       <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png" class="show_me_always" width="12" height="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
       4:30-5:30pm
     </div>
     <div class="location">
      <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png" class="show_me_always" width="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
      Cafe
    </div>
  </div>
  <div class="news-content">
    Calling all talent entries now – let me know if you’re in. Can you juggle bowling pins? Play the Star Wars theme on trombone?  Breakdance? Recite poetry? Sing like an angel? Are you a long lost member of the Wild Stallions air guitar band? A contortionist? Have any sort of talent – unusual, hard-earned or otherwise you want to share with the world? Well WE want to see it. Join us for the AKQA 4th annual Talent Show on Thur March 9th. Café, with beverages.              </div>
  </div>
  <!--news block 3-->
  <div class="news-block">
    <div class="date">THE LATEST</div>
    <h2>
      He Got Game<br/> (Well, used to…)
    </h2>
    <!-- add a option to hide this-->
    <div class="td-holder">
      <div class="time">
       <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png" class="show_me_always" width="12" height="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
       After Work
     </div>
     <div class="location">
      <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png" class="show_me_always" width="12" style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt="">
      The Court
    </div>
  </div>
  <div class="news-content">
    Are you a paunchy [sic], over-the-hill-ish hoopster that’s interested in playing pick-up basketball after work? Let Luis Jimenez and Chris Mezzetta know. They’re starting the conversation now to see if there’s interest and will take it from there to sort details.
  </div>
</div>

</div>
</section>
<section class="activities">
  <div class="content">
    <h3>ACTIVITIES</h3>
    <!--activities block 1 Mon-->
    <div class="activities-block">
      <div class="date">MONDAY</div>
      <!--Breakfast-->
      <div class="activity">
        <h2>
          Breakfast
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Morning
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Cafe
          </div>
        </div>
        <div class="activity-content">
          Grub with us every Monday morning in the Café. Special Breakfast will be last Monday of every month (so, Feb 27th).
        </div>
      </div>
      <!--Guided Meditation-->
      <div class="activity">
        <h2>
          Guided Meditation
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            12:00 - 12:30pm
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Studio
          </div>
        </div>
        <div class="activity-content">
          Newbies welcome. And ask <b>Sterling</b> to join our AKQA meditation slack channel.
        </div>
      </div>
    </div>
    <!--activities block 2 Tues-->
    <div class="activities-block">
      <div class="date">TUESDAY</div>
      <!--AKQA Runs SF-->
      <div class="activity">
        <h2>
          AKQA Runs SF
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Noon
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Cafe
          </div>
        </div>
        <div class="activity-content">
          Meet outside the main lobby. Showers + towels on the main floor.
        </div>
      </div>
      <!--Acupuncture-->
      <div class="activity">
        <h2>
          Acupuncture
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            30mins
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Muir
          </div>
        </div>
        <div class="activity-content">
          Every other Tues with Jes Davies. Sign up <a href="https://www.schedulicity.com/scheduling/JDAGJ5/services" target="_blank">here</a>. Sessions are 30 minutes and only costs ya $15.
        </div>
      </div>
      <!--Yoga-->
      <div class="activity">
        <h2>
          Yoga
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            5:30 - 6:30pm
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Muir
          </div>
        </div>
        <div class="activity-content">
          Tues 5:30-6:30pm and Fri 12-1pm. Mats + props provided. In Muir unless we holler otherwise.
        </div>
      </div>

    </div>
    <!--activities block 3 Wed-->
    <div class="activities-block">
      <div class="date">WEDNESDAY</div>
      <!--Guided Meditation-->
      <div class="activity">
        <h2>
          Guided Meditation
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            12:00 - 12:30pm
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Studio
          </div>
        </div>
        <div class="activity-content">
          Newbies welcome. And ask <b>Sterling</b> to join our AKQA meditation slack channel.
        </div>
      </div>
      <!--Green Drank-->
      <div class="activity">
        <h2>
          Green Draaank
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Afternoon
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Cafe
          </div>
        </div>
        <div class="activity-content">
          Pop-up smoothies mysteriously appear, made by your super cool volunteer colleagues.
        </div>
      </div>
    </div>
    <!--activities block 4 Thur-->
    <div class="activities-block">
      <div class="date">THURSDAY</div>
      <!--Tara Firma Farms-->
      <div class="activity">
        <h2>
          Tara Firma Farms
        </h2>
        <!-- add a option to hide this-->
        <div class="td-holder">
          <div class="time">
            <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Afternoon
          </div>
          <div class="location">
            <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
            Doorstep
          </div>
        </div>
        <div class="activity-content">
         Support your local, sustainable farmers and get food right at our doorstep. More info on membership
       </div>
     </div>
     <!--Chair Message-->
     <div class="activity">
      <h2>
        Chair Message
      </h2>
      <!-- add a option to hide this-->
      <div class="td-holder">
        <div class="time">
          <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          All Day
        </div>
        <div class="location">
          <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          Studio
        </div>
      </div>
      <div class="activity-content">
        20 minutes per sesh.  AKQA covers most of the cost, so you just pay 10 bucks. Hope you get a good rub down.
      </div>
    </div>
    <!--AKQA Runs SF-->
    <div class="activity">
      <h2>
        AKQA Runs SF
      </h2>
      <!-- add a option to hide this-->
      <div class="td-holder">
        <div class="time">
          <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          Noon
        </div>
        <div class="location">
          <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          Cafe
        </div>
      </div>
      <div class="activity-content">
        Meet outside the main lobby. Showers + towels on the main floor.
      </div>
    </div>
  </div>
  <!--activities block 5 Fri-->
  <div class="activities-block">
    <div class="date">FRIDAY</div>
    <!--Yoga-->
    <div class="activity">
      <h2>
        Yoga
      </h2>
      <!-- add a option to hide this-->
      <div class="td-holder">
        <div class="time">
          <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          12-1pm
        </div>
        <div class="location">
          <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          Muir
        </div>
      </div>
      <div class="activity-content">
        Tues 5:30-6:30pm and Fri 12-1pm. Mats + props provided. In Muir unless we holler otherwise.
      </div>
    </div>
    <!--Guided Meditation-->
    <div class="activity">
      <h2>
        Guided Meditation
      </h2>
      <!-- add a option to hide this-->
      <div class="td-holder">
        <div class="time">
          <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          12:00 - 12:30pm
        </div>
        <div class="location">
          <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
          Studio
        </div>
      </div>
      <div class="activity-content">
        Newbies welcome. And ask <b>Sterling</b> to join our AKQA meditation slack channel.
      </div>
    </div>
    <!--activities block 5 Monthly-->
    <div class="activities-block">
      <div class="date">MONTHLY</div>
                  <!--Get your Hair Did-->
                  <div class="activity">
                    <h2>
                      Get your Hair Did
                    </h2>
                    <!-- add a option to hide this-->
                    <div class="td-holder">
                      <div class="time">
                        <!--<img src="img/core/icon_clock_2x.png" class="show_me_always" width="12" height="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
                        5:30 - 6:30pm
                      </div>
                      <div class="location">
                        <!--<img src="img/core/icon_location_2x.png" class="show_me_always" width="12"  style="padding-right: 2px;display:inline; margin:0 0 0 0;" border="0" alt=""/>-->
                        Studio
                      </div>
                    </div>
                    <div class="activity-content">
                      Men $40 / Women’s $50 (Bangs $10). Reception sent sign-up link out this week.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="clubs">
            <div class="content">
              <h3>CLUBS</h3>
              <!--Design Club-->
              <div class="club-block">
                <div class="icon">
                 <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/147df6f4-c2b1-4195-981c-5a3eed2bf129.png" width="43" alt="">
               </div>
               <h2>
                Design Club
              </h2>
              <div class="club-content">
                This monthly meet-up is back if full effect. If you’re not on it and wanna be, hit up <b>Nate Scott</b>. All black attire strongly encouraged but not mandatory.
              </div>
            </div>
            <!--Women for Women-->
            <div class="club-block">
              <div class="icon">
               <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/427b9e59-8bd5-44dc-a8dd-925d62f4f663.png" width="46" alt="">
             </div>
             <h2>
              Women for Women
            </h2>
            <div class="club-content">
              <a href="https://en.wikipedia.org/wiki/Stefy_Bau" target="_blank">Stefy Bau</a> the Italian professional motocross racer and consummate bad ass babe will be speaking to the W4W on <b>Feb 8th from 12-1pm</b> down in Sunnyvale with a satellite stream into the SF office. Ask for <b>Michelle Lassman</b> for the invite.
            </div>
          </div>
          <!--Karma Crew-->
          <div class="club-block">
            <div class="icon">
             <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/31e73560-7050-46ba-8fe6-a200740a8e45.png" width="56" alt="">
           </div>
           <h2>
            Karma Crew
          </h2>
          <div class="club-content">
            Hit <b>me</b> up for overall club interest or to share volunteer ideas/inspiration. Looking for volunteers to join us at the <u><a href="https://www.sfmfoodbank.org/volunteer/" target="_blank">SF Marin Food Bank</a></u> for our monthly night there – next up if Wed Feb 15 from 6-8pm.  Please let me know if you want to join the helping-in-hairnets.
          </div>
        </div>
        <!--Climbing Club-->
        <div class="club-block">
          <div class="icon">
           <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/cd9d1330-d13a-4656-9c7a-f726837b4100.png" width="46" alt="">
         </div>
         <h2>
          Climbing Club
        </h2>
        <div class="club-content">
          To get a Touchstone membership or join the climbers' email Adistro list hit up <b>Bobby Caplin. Nidhi Reddy</b> is the organizer for small after work groups, give her a shout if you're interested.
        </div>
      </div>
      <!--AKQA Lifters-->
      <div class="club-block">
        <div class="icon">
         <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/b1ec37e6-2b2d-4c6e-8ff4-6afab8ef2ce7.png" width="56" alt="">
       </div>
       <h2>
        AKQA Lifters
      </h2>
      <div class="club-content">
        Get swole at Crunch over lunch (that rhymes). If you want to get jacked, tell <b>Ryan Brock</b> and he’ll add you to the Slack channel.
      </div>
    </div>
    <!--Soccer Team-->
    <div class="club-block">
      <div class="icon">
       <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/ebbbe50c-47a3-4676-8d6a-0ef06e19b16f.png" width="41" alt="">
     </div>
     <h2>
      Soccer Team
    </h2>
    <div class="club-content">
      Want to join an AKQA soccer league? <b>Laurent Linville</b> is your man.
    </div>
  </div>
  <!--AKQA Runs SF-->
  <div class="club-block">
    <div class="icon">
     <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/7bf3b68c-6ab8-4d27-9df1-4d8a60f026f4.png" width="56" alt="">
   </div>
   <h2>
    AKQA Runs SF
  </h2>
  <div class="club-content">
    Join our run club every Tues + Thur at noon, meet outside the main lobby.  Showers + towels on the main floor.
  </div>
</div>
<!--Plank Club-->
<div class="club-block">
  <div class="icon">
   <img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/a5dcb98b-e03a-47eb-b854-80a4175bca80.png" width="56" alt="">
 </div>
 <h2>
   Plank Club
 </h2>
 <div class="club-content">
  Need a little afternoon energy boost? Come plank with us.  In/out/jacked in under 10 minutes. 3pm-ish; in Garcia. <b>Cody Lucas</b> is your contact if you
  want in.
</div>
</div>

</div>
</section>
<section class="footer">
  <div class="content">
    <div class="logos-holder">
      <div class="social">
       <a href="https://www.facebook.com/akqa" target="_blank"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/03d4a55c-f000-4905-ba8f-11e04945f009.png" width="19" alt=""></a>
       <a href="https://www.twitter.com/akqa" target="_blank"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/fa341672-9bfd-434e-ace2-4f08b47cb6e1.png" width="22" alt=""></a>
       <a href="https://plus.google.com/+Akqaplus" target="_blank"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/e9b676f3-9c51-4184-9749-a7a4c47c12b6.png" width="26" alt=""></a>
       <a href="https://www.instagram.com/akqa" target="_blank"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/980945ec-8c2b-460c-8cbe-31b8f224e5d8.png" width="26" alt=""></a>
       <a href="https://www.linkedin.com/company/akqa" target="_blank"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/d8a9c99a-954d-4ab0-a8ea-49b5f78fd28a.png" width="23" alt=""></a>

       <div class="logo">
        <a href="http://www.akqa.com/" target="_blank"><img src="https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/dd88898a-ca35-4d88-ab51-bd18c6d48100.png" width="43" alt=""></a>
      </div>
    </div>
  </div>
</div>
</section>
</div>
</div>


            `,
            "foot" : `
</body>
</html>

            `
        }
    }   
    
};