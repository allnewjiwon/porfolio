$(function(){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    // 해상도 별 sc-goal 스크롤 트리거 디테일 수정
    // desktop
    "(min-width: 1200px)":function(){
      gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-10% 0%',
          end: '100% 0%',
          toggleClass: {targets: ".sc-goal .group-flex", className: "txtMotion"},
        }
      })

      const goalTitMotion = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-30% 0%',
          end: '100% 0%',
          // markers: true,
        },
        defaults: {
          yPercent:50, opacity:0,
          duration: .5,
        }
      })

      goalTitMotion
      .from('.sc-goal .title-area .headline',{})
      .from('.sc-goal .title-area .desc',{})

      const lineMotion = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-30% 0%',
          end: '100% 0%',
        }
      })

      lineMotion
      .from('.sc-goal .line',{width: "0%", duration: 2})
    },
    // 1024 ~ 1199
    "(min-width: 1024px) and (max-width: 1199px)":function(){
      gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-20% 0%',
          end: '100% 0%',
          toggleClass: {targets: ".sc-goal .group-flex", className: "txtMotion"},
        }
      })
    },
    // tablet
    "(min-width: 768px) and (max-width: 1023px)":function(){
      gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '0% 30%',
          end: '100% 0%',
          toggleClass: {targets: ".sc-goal .group-flex", className: "txtMotion"},
        }
      })

     const goalTitMotion = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-goal',
        start: '-30% 0%',
        end: '100% 0%',
        // markers: true,
      },
      defaults: {
        yPercent:50, opacity:0,
        duration: .5,
      }
    })

    goalTitMotion
    .from('.sc-goal .title-area .headline',{})
    .from('.sc-goal .title-area .desc',{})

    const lineMotion = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-goal',
        start: '-30% 0%',
        end: '100% 0%',
      }
    })

    lineMotion
    .from('.sc-goal .line',{width: "0%", duration: 2})
    },
    // mobile
    "(max-width: 767px)":function(){
      gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-30% 40%',
          end: '100% 0%',
          toggleClass: {targets: ".sc-goal .group-flex", className: "txtMotion"},
          // markers: true
        }
      })

      const goalTitMotion = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-30% 40%',
          end: '100% 0%',
          // markers: true,
        },
        defaults: {
          yPercent:50, opacity:0,
          duration: .5,
        }
      })

      goalTitMotion
      .from('.sc-goal .title-area .headline',{})
      .from('.sc-goal .title-area .desc',{})

      const lineMotion = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-goal',
          start: '-30% 40%',
          end: '100% 0%',
        }
      })

      lineMotion
      .from('.sc-goal .line',{width: "0%", duration: 2})

    },

    // 공통 모션

    "all" : function(){

    // 0) cursor event

      $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;
        gsap.to('.cursor',{
          x:xVal,
          y:yVal,
          duration:.3,
        })
      })
      
      $('.txt-top, .txt-bottom, .footer .top-area, .header .gnb-item, .sc-project .contents .project-item').mouseover(function(){
        gsap.to('.cursor',{backgroundColor:'#0f0', duration:.3})
        gsap.to('.cursor',{scale:.5})
      })
    
      $('.txt-top, .txt-bottom, .footer .top-area, .header .gnb-item, .sc-project .contents .project-item').mouseleave(function(){
        gsap.to('.cursor',{backgroundColor:'#fff',})
        gsap.to('.cursor',{scale:1})
      })
      $('.sc-project .thumb-box').mouseover(function(){
        gsap.to('.cursor',{scale:2})
        gsap.to('.cursor span', { visibility: "visible", opacity: 1})
      })
      $('.sc-project .thumb-box').mouseleave(function(){
        gsap.to('.cursor',{scale:1})
        gsap.to('.cursor span', { visibility: "hidden", opacity: 0,})
      })

      // 1) intro 애니메이션
      
          
      const introAni = gsap.timeline({
        onComplete:function(){
          visualTextAni.play();
        }
      })

    
        introAni
        .addLabel('a')

        .from('.intro .title-intro',{opacity:0, yPercent: 100, duration: 1.5},'a' )
        .from('.intro .line',{height:0, duration:1, delay:1, ease: Power4.easeInOut},'a')
        .to('.intro .title-intro',{opacity:0, delay:2.5,duration: 1},'a')
        .to('.intro .line',{opacity:0, delay:2.5,duration: 1}, 'a')
        .to('.intro',{height:0, delay: 3,ease: Power4.easeIn},'a')
        introAni
    

        gsap.set('.sc-visual .headline .word',{yPercent:100})

        const visualTextAni = gsap.to('.sc-visual .headline .word',{
          paused:true,
          yPercent:0,
          ease: Power4.easeInOut
        })


        // 2. sc-about txt 모션
        const tagMotion = gsap.timeline({
          scrollTrigger: {
            trigger: '.sc-about',
            start: '20% 70%',
            end: '100% 0%',
            // markers: true,
          }
        })

        tagMotion

        .to('.sc-about .supplement',{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        } )


        const splitMotion = gsap.timeline({
          scrollTrigger: {
            trigger: '.sc-about',
            start: '20% 70%',
            end: '100% 0%',
        
          },
        })

        splitMotion
        .addLabel('a')
        .from('.sc-about .line-txt1 .split-word',{
          stagger:.1,  yPercent: 100,
          opacity:0,
          rotate: 90,
        },'a')
        .from('.sc-about .line-txt2 .split-word',{
          stagger:.1,  yPercent: 100,
          opacity:0,
          rotate: 90,
        },'a')


        const portMotion = gsap.timeline({
          scrollTrigger : {
            trigger: '.sc-project',
            start: '0% 20%',
            end: '100% 0%',
            // markers: true,
          },
          defaults : {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            stagger: .8
          }
        })

        portMotion
        .to('.sc-project .link-portfolio',{})





      
      // 3. sc-project contents hover 이벤트

     $('.sc-project .group-index').mouseover(function(){
        $('.sc-project .contents').stop().slideDown()
      })

     $('.sc-project .group-index').mouseleave(function(){
        setTimeout(function(){
          $('.sc-project .contents').stop().slideUp()
        }, 1000)
      })


      // $(window).resize(function(){
      //   ww = window.innerWidth;
      //   if(ww <= 1200){
      //     idxOn.off('mouseover')
      //     idxOff.off('mouseleave')
      //   }else{
      //     idxOn.trigger('mouseover')
      //     idxOff.trigger('mouseleave')
      //   }
      // })



    // 4. 메뉴 클릭 시 해당 섹션을 스크롤 이동. 
      $('.gnb-area .gnb-item .gnb,.sc-about .btn-move').click(function(e){
        e.preventDefault(e);

        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
      })



    }
  
  })



})