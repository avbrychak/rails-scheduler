$(document).ready(function() {
  scheduler.config.xml_date="%Y-%m-%d %H:%i";
  scheduler.config.start_on_monday = false;
  scheduler.config.show_loading = true;
  scheduler.config.prevent_cache = true;
  scheduler.templates.event_text = function(start,end,ev){
       return 'Subject: ' + ev.text + '';
  };
  scheduler.init('scheduler',new Date(),"week");

  scheduler.load("/events.json", 'json');
  var dp = new dataProcessor("/events/save");
  dp.init(scheduler);
  dp.setTransactionMode("POST",false);
  dp.attachEvent("onAfterUpdateFinish",function(){
    scheduler.clearAll();
    scheduler.load("/events.json", 'json');
  })
});
