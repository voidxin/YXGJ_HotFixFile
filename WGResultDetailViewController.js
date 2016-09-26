// 修复1.4.0版本中问题上报查询中数组越界引起的bug
require('WGResultDetailViewController');
defineClass("WGResultDetailViewController", {

        

        loadNewData : function(){


            self.allDataFrameArray().removeAllObjects();

            
            self.setValue_forKey(1,"_pageNo");
            
            self.setValue_forKey(1,"_loadType");

            self.loadQuestionData();

        }        

    }, {});







