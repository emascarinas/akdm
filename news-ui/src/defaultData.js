module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('ak-newsletter', JSON.stringify({
            "header": {
                "leftImgUrl": "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/16a0751d-1991-48ad-bd18-2db132af9baf.png",
                "rightImgUrl": "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/63be9f17-5744-49f3-bbda-cee8454cc2f4.png"
            }
        }));
    }   
    
};
