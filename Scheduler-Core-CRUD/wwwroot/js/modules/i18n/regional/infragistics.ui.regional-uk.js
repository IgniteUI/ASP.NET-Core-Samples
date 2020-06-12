(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.regional=$.ig.regional||{};if($.datepicker&&$.datepicker.regional){$.datepicker.regional["uk"]={closeText:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",monthNames:["\u0421\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],monthNamesShort:["\u0421\u0456\u0447","\u041b\u044e\u0442","\u0411\u0435\u0440","\u041a\u0432\u0456","\u0422\u0440\u0430","\u0427\u0435\u0440","\u041b\u0438\u043f","\u0421\u0435\u0440","\u0412\u0435\u0440","\u0416\u043e\u0432","\u041b\u0438\u0441","\u0413\u0440\u0443"],dayNames:["\u043d\u0435\u0434\u0456\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0441\u0435\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440","\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f","\u0441\u0443\u0431\u043e\u0442\u0430"],dayNamesShort:["\u043d\u0435\u0434","\u043f\u043d\u0434","\u0432\u0456\u0432","\u0441\u0440\u0434","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0431\u0442"],dayNamesMin:["\u041d\u0434","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"],weekHeader:"\u0422\u0438\u0436",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""}}$.ig.regional.uk={monthNames:["\u0421\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],monthNamesShort:["\u0421\u0456\u0447","\u041b\u044e\u0442","\u0411\u0435\u0440","\u041a\u0432\u0456","\u0422\u0440\u0430","\u0427\u0435\u0440","\u041b\u0438\u043f","\u0421\u0435\u0440","\u0412\u0435\u0440","\u0416\u043e\u0432","\u041b\u0438\u0441","\u0413\u0440\u0443"],dayNames:["\u043d\u0435\u0434\u0456\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0441\u0435\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440","\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f","\u0441\u0443\u0431\u043e\u0442\u0430"],dayNamesShort:["\u043d\u0435\u0434","\u043f\u043d\u0434","\u0432\u0456\u0432","\u0441\u0440\u0434","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0431\u0442"],datePattern:"dd.MM.yyyy",dateLongPattern:"d MMMM yyyy \u0440.",dateTimePattern:"dd.MM.yyyy H:mm",timePattern:"H:mm",timeLongPattern:"H:mm:ss",dateTitleFullPattern:"dd MM yy",dateTitleMonthPattern:"MM yy",numericNegativePattern:"-n$",numericDecimalSeparator:",",numericGroupSeparator:" ",numericMaxDecimals:2,currencyPositivePattern:"n $",currencyNegativePattern:"-n $",currencySymbol:"\u0433\u0440\u043d.",currencyDecimalSeparator:",",currencyGroupSeparator:" ",percentDecimalSeparator:",",percentGroupSeparator:" "};if($.ig.util&&$.ig.util.changeGlobalRegional){$.ig.util.changeGlobalRegional("uk")}});