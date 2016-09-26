/* 1：修复1.4.0版本中问题上报查询中数组越界引起的bug
   2: 修复1.4.0版本中员工入职提交数据value为nil时字典出错导致的闪退
*/
require('WGResultDetailViewController');
require('WGEntryViewController');
require('NSMutableDictionary');
require('NSString');
require('PSBTools');
require('wgUserEntity');
require('WGManagerModel');

/*
   问题上报查询页面数组越界
 */
defineClass("WGResultDetailViewController", {

        

        loadNewData : function(){


            self.allDataFrameArray().removeAllObjects();

            
            self.setValue_forKey(1,"_pageNo");
            
            self.setValue_forKey(1,"_loadType");

            self.loadQuestionData();

        }        

    }, {});


/*
    员工入职页面
    修复员工入职提交数据value为nil时字典出错导致的闪退
*/
defineClass("WGEntryViewController",{

	returnDicWithYuanGongData : function(){

		var dic = NSMutableDictionary.alloc().init();
        dic.setValue_forKey(self.valueForKey("_education"), 'wgmf_xlid'); //
	    dic.setValue_forKey(self.valueForKey("_provice"), 'wgmf_ryjg'); //
	    dic.setValue_forKey(self.valueForKey("_birthDay"), 'wgmf_birthday'); //
	    dic.setValue_forKey(self.valueForKey("_enterDay"), 'wgmf_workdate'); //
	    dic.setValue_forKey(PSBTools.DateTimeWithFormateNowString("yyyy-MM-dd"), 'wgmf_adddate'); //
	    dic.setValue_forKey(self.valueForKey("_phoneNumber"), 'wgmf_mobilephone'); //
	    dic.setValue_forKey("CX", "wgmf_type"); //
	  
	    dic.setValue_forKey(self.valueForKey("_mergencyPhone"), 'wgmf_phone'); //

	   
	    dic.setValue_forKey("0", "wgmf_status"); //
	    dic.setValue_forKey("1", "entrystatus");

	    dic.setValue_forKey(self.valueForKey("_bankNumber"), 'wgmf_accountid'); //
	    dic.setValue_forKey(self.valueForKey("_careSalary"), 'wgmf_ax_net'); //
	    dic.setValue_forKey(self.valueForKey("_bankProvice"), 'wgmf_bankcity'); //
	    dic.setValue_forKey(self.valueForKey("_bank"), 'wgmf_bankname'); //
	    dic.setValue_forKey(self.valueForKey("_baseSalalry"), 'wgmf_jb_net'); //
	    dic.setValue_forKey(self.valueForKey("_positionSalary"), 'salary_job'); //
	    dic.setValue_forKey(self.valueForKey("_comunicationSuport"), 'commsubsidy'); //
	    dic.setValue_forKey(self.valueForKey("_emergencyPersion"), 'wgmf_homemail'); //
	    dic.setValue_forKey(wgUserEntity.sharedManager().name(), 'wgmf_rper_name');
	    dic.setValue_forKey(wgUserEntity.sharedManager().staffId(), 'wgmf_lr_oper');
	    dic.setValue_forKey(self.valueForKey("_name"), 'name');
	    dic.setValue_forKey(self.valueForKey("_idCard"), 'wgmf_personalid'); //
	    dic.setValue_forKey(self.valueForKey("_sex"), 'wgmf_sex'); //

	    if (self.valueForKey("_positionflag") == 2) {

	    	var managerModel = self.valueForKey("_managerModel");
	        dic.setValue_forKey((managerModel.saleOrganization().integerValue()), 'sale_organization'); //
	        dic.setValue_forKey("0", 'wgmf_shop'); //
	       
	        dic.setValue_forKey("2", 'wgmf_rolestatus');

	    }else{

	    	dic.setValue_forKey(self.valueForKey("_shop"), 'wgmf_shop'); //
	        dic.setValue_forKey(0, 'sale_organization'); //
	       
	        dic.setValue_forKey("1", 'wgmf_rolestatus');

	    }

	     return dic;  
	}

	    

    }, {});









