module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('ak-newsletter', JSON.stringify({
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
            }
        }));
    }   
    
};



