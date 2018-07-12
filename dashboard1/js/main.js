$(document).ready(function(){
    "use strict";
    $("#search").on("click",function(e){
        e.preventDefault();
        $(".search-box").fadeIn()
    })
    $(".dismiss").on("click",function(){
        $(".search-box").fadeOut()
    })
    $(".card-close a.remove").on("click",function(e){
        e.preventDefault();
        $(this).parents(".card").fadeOut()
    })
    $(".dropdown").on("show.bs.dropdown",function(){
        $(this).find(".dropdown-menu").first().stop(!0,!0).fadeIn()
    })
    $(".dropdown").on("hide.bs.dropdown",function(){
        $(this).find(".dropdown-menu").first().stop(!0,!0).fadeOut()
    })
    $("#toggle-btn").on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".side-navbar").toggleClass("shrinked");
        $(".content-inner").toggleClass("active");
        $(document).trigger("sidebarChanged");
        ($(window).outerWidth()>1183 && ($("#toggle-btn").hasClass("active"))?($(".navbar-header .brand-small").hide(),$(".navbar-header .brand-big").show()):($(".navbar-header .brand-small").show(),$(".navbar-header .brand-big").hide()))
        $(window).outerWidth()<1183 && $(".navbar-header .brand-small").show()})
        $(".form-validate").each(function(){
            $(this).validate({
                errorElement:"div",
                errorClass:"is-invalid",
                validClass:"is-valid",
                ignore:":hidden:not(.summernote, .checkbox-template, .form-control-custom),.note-editable.card-block",
                errorPlacement:function(e,t){
                    e.addClass("invalid-feedback")
                    "checkbox"===t.prop("type")?e.insertAfter(t.siblings("label")):e.insertAfter(t)
                }
            })
        })
        var e=$("input.input-material");
        e.filter(function(){
            return""!==$(this).val()
        }).siblings(".label-material").addClass("active");
        e.on("focus",function(){
            $(this).siblings(".label-material").addClass("active")
        })
        e.on("blur",function(){
            $(this).siblings(".label-material").removeClass("active"),""!==$(this).val()?$(this).siblings(".label-material").addClass("active"):$(this).siblings(".label-material").removeClass("active")
        })
        var t=$(".content-inner");
        function n(){
            var e=$(".main-footer").outerHeight();
            t.css("padding-bottom",e+"px")
        }
        $(document).on("sidebarChanged",function(){
            n()
        })
        $(window).on("resize",function(){n()})
        $(".external").on("click",function(e){
            e.preventDefault()
            window.open($(this).attr("href"))
        })
    })