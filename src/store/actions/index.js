import axios from 'axios';




export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}



export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
            .then(response => {

                var dummydata = {
                    "total": "222",
                    "hits": [{
                        "articleVisibility": ["all-erc"],
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Do the deducted leave hours extend my leave?",
                        "summary": null,
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:24:04",
                        "cq:lastModified": "2019-04-03T18:59:52",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question\nMaternity\nParental Stand Alone",
                        "articleType": "faq",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "manpreetsingh6",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Do the deducted leave hours extend my leave? No. Leave is not managed as a bucket of hours. It is based on the duration of time specified by your healthcare provider.",
                        "overview": "Do the deducted leave hours extend my leave? No. Leave is not managed as a bucket of hours. It is based on the duration of time specified by your healthcare provider.",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/faq/do-the-deducted-leave-hours-extend-my-leave",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": ["all-erc"],
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Leave Share Stage",
                        "summary": "Review and complete these tasks in the Leave Share stage.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:23:59",
                        "cq:lastModified": "2019-04-03T18:59:37",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question\nMaternity\nParental Stand Alone",
                        "articleType": "learning",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "manpreetsingh6",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Leave Share Stage Overview Review and complete these tasks in the Leave Share leave stage. Table of Contents What is a Leave Share leave stage? What are the tasks in the Leave Share leave stage? What if the employee submits incomplete documentation or does not submit their documentation? Icon key What is a Leave Share leave stage? The Leave Share stage is the Leave Share benefit. The start and end dates are the first and last days of the employee's Leave Share option. In this stage, you will need to Receive and document Leave Share forms. Update leave stages. Approve or deny the leave. Send employee and employer decision emails. What are the tasks in the Leave Share leave stage? Review the tasks and actions required to complete the Leave Share leave stage in the following table. Task Name Trigger Due Date Action Required Return from Leave Discussion Created 3 calendar days after the Estimated Date of Delivery if the Actual Date of Delivery Field is not populated. 2 business days Verify the return to work date and review other leave and ramp back options, benefits, and enhanced services. Email Received Upon receipt of an email on a case. 2 business days Confirm that complete and accurate forms are attached to the email (SF). Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). Verify Pay Upon completion of the Document Received task. - Set the status to Completed. No additional action required (SF). Calculate Leave Share Upon completion of the Document Received task. - Set the status to Completed. No additional action required (SF). Decision Upon completion of the Document Received task. - Send the Approval/Denial Letter to the employee and employer. Employee Decision Notification Call Upon completion of the Decision Task for Ramp Back stage. 2 business days Contact the employee via phone about the decision and next steps. What if the employee submits incomplete documentation or does not submit their documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned completed forms (SF). Call the employee about incomplete forms. Send Incomplete Documentation email (SF). Suspend pay plan (N360). Update leave plan to Suspended due to Incomplete Documentation Received (N360). Icon key Automatically generated task Manually generated task Back to top",
                        "overview": "Leave Share Stage Overview Review and complete these tasks in the Leave Share leave stage. Table of Contents What is a Leave Share leave stage? What are the tasks in the Leave Share leave stage? What if the employee submits incomplete documentation or does not submit their documentation? Icon key What is a Leave Share leave stage? The Leave Share stage is the Leave Share benefit. The start and end dates are the first and last days of the employee's Leave Share option. In this stage, you will need to Receive and document Leave Share forms. Update leave stages. Approve or deny the leave. Send employee and employer decision emails. What are the tasks in the Leave Share leave stage? Review the tasks and actions required to complete the Leave Share leave stage in the following table. Task Name Trigger Due Date Action Required Return from Leave Discussion Created 3 calendar days after the Estimated Date of Delivery if the Actual Date of Delivery Field is not populated. 2 business days Verify the return to work date and review other leave and ramp back options, benefits, and enhanced services. Email Received Upon receipt of an email on a case. 2 business days Confirm that complete and accurate forms are attached to the email (SF). Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). Verify Pay Upon completion of the Document Received task. - Set the status to Completed. No additional action required (SF). Calculate Leave Share Upon completion of the Document Received task. - Set the status to Completed. No additional action required (SF). Decision Upon completion of the Document Received task. - Send the Approval/Denial Letter to the employee and employer. Employee Decision Notification Call Upon completion of the Decision Task for Ramp Back stage. 2 business days Contact the employee via phone about the decision and next steps. What if the employee submits",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/learning/leave-share-stage",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": "all-erc",
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "After Leave Stage",
                        "summary": "Review the After Leave Stage.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:23:59",
                        "cq:lastModified": "2019-04-03T18:59:35",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question,Maternity,Parental Stand Alone",
                        "articleType": "learning",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "anoop",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "After Leave Stage The After Leave stage is the time period after the employee returns to work. This is where correspondence and follow-up items will go if they come up after a leave has ended. You will not need to do anything on this stage. After 45 days of inactivity, a task will be auto-generated to bring you back to close the case.",
                        "overview": "After Leave Stage The After Leave stage is the time period after the employee returns to work. This is where correspondence and follow-up items will go if they come up after a leave has ended. You will not need to do anything on this stage. After 45 days of inactivity, a task will be auto-generated to bring you back to close the case.",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/learning/after-leave-stage",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": ["all-erc"],
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Before Leave Stage",
                        "summary": "Review and complete these tasks in the Before Leave stage.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:23:59",
                        "cq:lastModified": "2019-04-03T18:59:35",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question\nMaternity\nParental Stand Alone",
                        "articleType": "learning",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "ffirdous",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Before Leave Stage Overview Review and complete these tasks in the Before Leave stage. Table of Contents What is a Before Leave stage? What are the tasks in the Before Leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Before Leave stage? The Before Leave stage is the period of time from when the case is opened to the first day of the employee's leave. Unlike other stages, this stage is not a leave plan. In this stage, you will gather information about the employee’s leave request and eligibility, set up plans in N360 and following stages in Salesforce (SF), and notify the employee and the employer of the leave request. What are the tasks in the Before Leave stage? Review the tasks and actions required to complete the Before Leave stage in the following table. Task Name Trigger Due Date Action Required Verify Eligibility and Setup Stages Upon creation of a case. 2 business days Check eligibility (N360). Set up plans in (N360). Update the leave stages with start/end dates (SF). Update the FMLA eligibility and Statutory eligible boxes (SF). Employee Introduction Upon completion of Verify Eligibility and Setup Stages task. 2 business days Complete the employee introduction call (SF). Send the employee acknowledgement letter and enclosures (SF). Notify Employer Upon completion of the Verify Eligibility and Setup Stages task. 2 business days Send employer notification email (SF). Outbound Contact – EE Upon completion of the Employee Introduction task. 14 calendar days Review emails to see if the employee has returned the completed forms (SF). Call the employee about missing or incomplete forms. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned completed forms (SF). Call the employee about incomplete forms. Send the Incomplete Documentation email (SF). Suspend pay plan (N360). Update the leave plan to Suspended due to Incomplete Documentation Received (N360). Missing Documentation Status is Pending. Documentation Received task is not completed on the stage. It has been 17 calendar days since the completion of the Employee Introduction task. 11 calendar days after the task creation date Review emails to see if employee has returned completed forms (SF). Call employee about missing forms. Send No Documentation email (SF). Suspend pay plan (N360). Update leave plan to Suspended due to No Documentation Received (N360). Icon key Automatically generated task Manually generated task Back to top",
                        "overview": "Before Leave Stage Overview Review and complete these tasks in the Before Leave stage. Table of Contents What is a Before Leave stage? What are the tasks in the Before Leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Before Leave stage? The Before Leave stage is the period of time from when the case is opened to the first day of the employee's leave. Unlike other stages, this stage is not a leave plan. In this stage, you will gather information about the employee’s leave request and eligibility, set up plans in N360 and following stages in Salesforce (SF), and notify the employee and the employer of the leave request. What are the tasks in the Before Leave stage? Review the tasks and actions required to complete the Before Leave stage in the following table. Task Name Trigger Due Date Action Required Verify Eligibility and Setup Stages Upon creation of a case. 2 business days Check eligibility (N360). Set up plans in (N360). Update the leave stages with start/end dates (SF). Update the FMLA eligibility and Statutory eligible boxes (SF). Employee Introduction Upon completion of Verify Eligibility and Setup Stages task. 2 business days Complete the employee introduction call (SF). Send the employee acknowledgement letter and enclosures (SF). Notify Employer Upon completion of the Verify Eligibility and Setup Stages task. 2 business days Send employer notification email (SF). Outbound Contact – EE Upon completion of the Employee Introduction task. 14 calendar days Review emails to see if the employee has returned the completed forms (SF). Call the employee about missing or incomplete forms. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/learning/before-leave-stage",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": "all-erc",
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Family and Medical Leave Act FMLA Leave of Absence Policy",
                        "summary": "Under the FMLA, Amazon provides eligible employees with 12 weeks (or 26 weeks) of unpaid, job-protected leave in a rolling 12-month period.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:24:08",
                        "cq:lastModified": "2019-04-03T19:00:12",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "Leave-of-Absence", "General-Question"],
                        "caseReason": ["I-need-time-away-for-parental-leave", "I-need-time-away-for-medical-reasons", "I-need-time-away-for-personal-reasons"],
                        "keywords": "I need time away for medical reasons,I need time away for parental leave,I need time away for personal reasons,General Question,Maternity,Parental Stand Alone",
                        "articleType": "policy",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "gchavarr",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "View the policy on Inside Amazon. Family and Medical Leave Act (FMLA) Leave of Absence Policy",
                        "overview": "View the policy on Inside Amazon. Family and Medical Leave Act (FMLA) Leave of Absence Policy",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/policy/family-medical-leave-act-fmla-leave-of-absence",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": "all-erc",
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Jury Service Leave ROI",
                        "summary": "This article explains Jury Service Leave for associates in Ireland.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:24:08",
                        "cq:lastModified": "2019-04-03T19:00:11",
                        "caseType": ["Pay-and-Attendance"],
                        "caseReason": ["I-need-to-report-time-off"],
                        "keywords": "I need to report time off,jury service,jury duty,unpaid leave,court",
                        "articleType": "policy",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "thayerma",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Overview This article explains Jury Service Leave for associates in Ireland.",
                        "overview": "Overview This article explains Jury Service Leave for associates in Ireland.",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/policy/jury-service-leave-roi",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": "all-erc",
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Paid Parental Leave Policy",
                        "summary": "This policy explains Amazon's paid parental leave benefit, which provides employees with paid leave for up to 6 weeks within the first year of a child’s birth or adoption placement.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:24:07",
                        "cq:lastModified": "2019-04-03T19:00:07",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "Leave-of-Absence", "General-Question"],
                        "caseReason": ["I-need-time-away-for-parental-leave"],
                        "keywords": "General Question,Maternity,Parental Stand Alone,I need time away for parental leave",
                        "articleType": "policy",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "sulii",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "View the policy on Inside Amazon below. Paid Parental Leave Policy",
                        "overview": "View the policy on Inside Amazon below. Paid Parental Leave Policy",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/policy/paid-parental-leave-policy",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": ["all-erc"],
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Paid Parental Leave Stage",
                        "summary": "Review and complete these tasks in the Paid Parental leave stage.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:23:59",
                        "cq:lastModified": "2019-04-03T18:59:37",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question\nMaternity\nParental Stand Alone",
                        "articleType": "learning",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "manpreetsingh6",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Paid Parental Leave Stage Overview Review and complete these tasks in the Paid Parental leave stage. Table of Contents What is a Paid Parental leave stage? What are the tasks in the Paid Parental leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Paid Parental leave stage? The Paid Parental leave stage is the Paid Parental leave plan. The start and end dates are the first and last days of the employee's leave dates. In this stage, you will need to Receive and document Paid Parental forms. Update leave stages. Verify pay. Approve or deny the leave. Send employee and employer decision emails. What are the tasks in the Paid Parental leave stage? Review the tasks and actions required to complete the Paid Parental leave stage in the following table. Task Name Trigger Due Date Action Required Email Received Upon receipt of an email on a case. - Confirm that complete and accurate forms are attached to the email (SF). Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). Decision Upon completion of the Document Received task. 2 business days Update the Decision (N360). Change dates (N360). Send the Approval/Denial Letter to the employee and employer (SF). Verify Pay Upon completion of the Document Received task. 4 business days Verify pay and state offsets (N360). Employee Decision Notification Call Upon completion of the Decision Task for Paid Parental stage. 2 business days Contact the employee via phone about the decision and next steps. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned completed forms (SF). Call the employee about incomplete forms. Send the Incomplete Documentation email (SF). Suspend pay plan (N360). Update the leave plan to Suspended due to Incomplete Documentation Received (N360). Missing Documentation (for Parental Standalone - Statutory stages) Status is Pending. Documentation Received task is not completed on the stage. It has been 17 calendar days since the completion of the Employee Introduction task. 11 calendar days after the task creation date Review emails to see if the employee has returned completed forms (SF). Call the employee about missing forms. Send the No Documentation email (SF). Suspend pay plan (N360). Update the leave plan to Suspended due to No Documentation Received (N360). Missing Documentation (for Parental Standalone -Personal stages) 4 calendar days after stage creation if the Documentation Received task is not completed on the stage. 2 business days after task Review emails to see if the employee has returned completed forms (SF). Call the employee about missing forms. Send the No Documentation email (SF). Suspend pay plan (N360). Update the leave plan to Suspended due to No Documentation Received (N360). Icon key Automatically generated task Manually generated task Back to top",
                        "overview": "Paid Parental Leave Stage Overview Review and complete these tasks in the Paid Parental leave stage. Table of Contents What is a Paid Parental leave stage? What are the tasks in the Paid Parental leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Paid Parental leave stage? The Paid Parental leave stage is the Paid Parental leave plan. The start and end dates are the first and last days of the employee's leave dates. In this stage, you will need to Receive and document Paid Parental forms. Update leave stages. Verify pay. Approve or deny the leave. Send employee and employer decision emails. What are the tasks in the Paid Parental leave stage? Review the tasks and actions required to complete the Paid Parental leave stage in the following table. Task Name Trigger Due Date Action Required Email Received Upon receipt of an email on a case. - Confirm that complete and accurate forms are attached to the email (SF). Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). Decision Upon completion of the Document Received task. 2 business days Update the Decision (N360). Change dates (N360). Send the Approval/Denial Letter to the employee and employer (SF). Verify Pay Upon completion of the Document Received task. 4 business days Verify pay and state offsets (N360). Employee Decision Notification Call Upon completion of the Decision Task for Paid Parental stage. 2 business days Contact the employee via phone about the decision and next steps. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned completed forms (SF). Call the employee about",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/learning/paid-parental-leave-stage",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": ["all-erc"],
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Post-Partum Leave Stage",
                        "summary": "Review and complete these tasks in the Post-Partum stage.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:23:59",
                        "cq:lastModified": "2019-04-03T18:59:37",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question\nMaternity\nParental Stand Alone",
                        "articleType": "learning",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "manpreetsingh6",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Post-Partum Leave Stage Overview Review and complete these tasks in the Post-Partum leave stage. Table of Contents What is a Post-Partum leave stage? What are the tasks in the Post-Partum leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Post-Partum leave stage? The Post-Partum stage is the post-partum leave plan. The start and end dates are the first and last days of the employee's leave dates. In this stage, you will need to Confirm date of delivery. Verify pay. Approve or deny the leave. Update leave stages. Send employee and employer decision emails. What are the tasks in the Post-Partum leave stage? Review the tasks and actions required to complete the Post-Partum leave stage in the following table. Task Name Trigger Due Date Action Required Confirm Date of Delivery Created 3 calendar days after the Estimated Date of Delivery if the Actual Date of Delivery field is not populated. 2 business days Confirm that the complete and accurate forms are attached to the email (SF). Update the Actual Date of Delivery on the case (SF). Decision Create this task when the employee returns their paperwork. 2 business days Update the Decision (N360). Change dates (N360). Send the Approval/Denial Letter to the employee and employer (SF). Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). Verify Pay Upon completion of the Document Received task. 4 business days Verify pay (N360). Employee Decision Notification Call Upon completion of the Decision Task for Pre-Partum stage. 2 business days Contact the employee via phone about the decision and next steps. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned completed forms (SF). Call the employee about incomplete forms. Send the Incomplete Documentation email (SF). Suspend pay plan (N360). Update the leave plan to Suspended due to Incomplete Documentation Received (N360). Icon key Automatically generated task Manually generated task Back to top",
                        "overview": "Post-Partum Leave Stage Overview Review and complete these tasks in the Post-Partum leave stage. Table of Contents What is a Post-Partum leave stage? What are the tasks in the Post-Partum leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Post-Partum leave stage? The Post-Partum stage is the post-partum leave plan. The start and end dates are the first and last days of the employee's leave dates. In this stage, you will need to Confirm date of delivery. Verify pay. Approve or deny the leave. Update leave stages. Send employee and employer decision emails. What are the tasks in the Post-Partum leave stage? Review the tasks and actions required to complete the Post-Partum leave stage in the following table. Task Name Trigger Due Date Action Required Confirm Date of Delivery Created 3 calendar days after the Estimated Date of Delivery if the Actual Date of Delivery field is not populated. 2 business days Confirm that the complete and accurate forms are attached to the email (SF). Update the Actual Date of Delivery on the case (SF). Decision Create this task when the employee returns their paperwork. 2 business days Update the Decision (N360). Change dates (N360). Send the Approval/Denial Letter to the employee and employer (SF). Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). Verify Pay Upon completion of the Document Received task. 4 business days Verify pay (N360). Employee Decision Notification Call Upon completion of the Decision Task for Pre-Partum stage. 2 business days Contact the employee via phone about the decision and next steps. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/learning/post-partum-leave-stage",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }, {
                        "articleVisibility": ["all-erc"],
                        "jcr:createdBy": "ppriya",
                        "jcr:title": "Ramp Back Leave Stage",
                        "summary": "Review and complete these tasks in the Ramp Back leave stage.",
                        "articleChannel": ["internal-app", "public-knowledge-base"],
                        "jcr:created": "2019-03-21T13:23:59",
                        "cq:lastModified": "2019-04-03T18:59:37",
                        "caseType": ["Maternity", "Parental-Stand-Alone", "General-Question"],
                        "caseReason": [],
                        "keywords": "General Question\nMaternity\nParental Stand Alone",
                        "articleType": "learning",
                        "articlelocationState": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MS", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "cq:lastModifiedBy": "manpreetsingh6",
                        "articleEmployeeClass": ["onsite-worker", "apprentice", "field-regular-part-time-20-29", "fixed-term-contractor---eu", "intern", "internal-staffing-solutions", "jv-rc-worker", "offsite-vendor", "onsite-vendor", "regular-flex-time-----20-hrs", "regular-full-time", "regular-part-time---20---hours", "regular-reduced-time--30---hrs", "seasonal-short-term"],
                        "timeKeeping": ["timesheets", "mytime", "salaried", "workforce-ready"],
                        "hrSupport": ["hrbp", "manager", "hrc", "local-hr", "agency-s-hr-team"],
                        "businessGroup": ["fulfillment-center", "customer-service", "aws-cs", "aws", "fresh", "pantry", "primenow", "seller-support-l1-3", "seller-support-l4", "sortation-center", "treasure-truck", "amazon-books-corporate", "amazon-books-ops", "amazon-logistics---amzl", "amazon-go", "primeair", "twitch", "zappos", "tenmarks", "shopbop", "fabric", "audible", "amazon-pick-up", "central-ops", "temp--contingent-worker", "corporate"],
                        "containsAttachment": false,
                        "articleBody": "Ramp Back Leave Stage Overview Review and complete these tasks in the Ramp Back leave stage. Table of Contents What is a Ramp Back leave stage? What are the tasks in the Ramp Back leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Ramp Back leave stage? The Ramp Back stage is the ramp back benefit. The start and end dates are the first and last days of the employee's ramp back schedule. In this stage, you will need to Receive and document Ramp Back forms. Update leave stages. Approve or deny the leave. Send employee and employer decision emails. What are the tasks in the Ramp Back leave stage? Review the tasks and actions required to complete the Ramp Back leave stage in the following table. Email Received Upon receipt of an email on a case. 2 business days Confirm that the complete and accurate forms are attached to the email (SF). Verify Pay Upon completion of the Document Received task. Set the status to Completed. No additional action required (SF). Employee Decision Notification Call Upon completion of the Decision Task for Ramp Back stage. 2 business days Contact the employee via phone about the decision and next steps. Task Name Trigger Due Date Action Required Return from Leave Discussion Created 3 calendar days after the Estimated Date of Delivery if the Actual Date of Delivery field is not populated. 2 business days Verify the return to work date and review other leave and ramp back options, benefits, and enhanced services. Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). - Decision Upon completion of the Document Received task. - Send the Approval/Denial Letter to the employee and employer. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the employee has not provided completed paperwork by the due date. 8 calendar days Review emails to see if the employee has returned completed forms (SF). Call the employee about incomplete forms. Send the Incomplete Documentation email (SF). Suspend pay plan (N360). Update leave plan to Suspended due to Incomplete Documentation Received (N360). Icon key Automatically generated task Manually generated task Back to top",
                        "overview": "Ramp Back Leave Stage Overview Review and complete these tasks in the Ramp Back leave stage. Table of Contents What is a Ramp Back leave stage? What are the tasks in the Ramp Back leave stage? What if the employee submits incomplete documentation or does not submit documentation? Icon key What is a Ramp Back leave stage? The Ramp Back stage is the ramp back benefit. The start and end dates are the first and last days of the employee's ramp back schedule. In this stage, you will need to Receive and document Ramp Back forms. Update leave stages. Approve or deny the leave. Send employee and employer decision emails. What are the tasks in the Ramp Back leave stage? Review the tasks and actions required to complete the Ramp Back leave stage in the following table. Email Received Upon receipt of an email on a case. 2 business days Confirm that the complete and accurate forms are attached to the email (SF). Verify Pay Upon completion of the Document Received task. Set the status to Completed. No additional action required (SF). Employee Decision Notification Call Upon completion of the Decision Task for Ramp Back stage. 2 business days Contact the employee via phone about the decision and next steps. Task Name Trigger Due Date Action Required Return from Leave Discussion Created 3 calendar days after the Estimated Date of Delivery if the Actual Date of Delivery field is not populated. 2 business days Verify the return to work date and review other leave and ramp back options, benefits, and enhanced services. Documentation Received Create this task when the employee returns their paperwork. 2 calendar days Confirm and update the Actual Date of Delivery on the case (SF). - Decision Upon completion of the Document Received task. - Send the Approval/Denial Letter to the employee and employer. What if the employee submits incomplete documentation or does not submit documentation? Task Name Trigger Due Date Action Required Incomplete Documentation Create this task if the",
                        "language": "en",
                        "country": "US",
                        "path": "/content/amazon/us/en/articles/learning/ramp-back-leave-stage",
                        "articleStatus": "new",
                        "lastModified": "3 Apr 2019"
                    }]
                }
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(dummydata))
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
            });
    };
}

export function productDetailsSuccess(productDetails) {
    return {
        type: 'PRODUCT_DETAILS_DATA_SUCCESS',
        productDetails
    };
}



export function fetchProductDetails(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                /* dispatch(itemsIsLoading(false));*/
                dispatch(productDetailsSuccess(response.data)) 
            })
            .catch(() => {
                
            });
    };
}


export function articlesFetchData(url,data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios({
            method: 'post',
            url: url,
            data: data,
            headers: {
                'content-type':  'application/x-www-form-urlencoded; charset=UTF-8',
                },
           
            })
            .then(response => {
                dispatch(itemsIsLoading(false));
               // dispatch(itemsFetchDataSuccess(response.data))
                dispatch(itemsFetchDataSuccess(response.data))
                
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
            });
    };
}


export function FetchPageData(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                /* dispatch(itemsIsLoading(false));*/
                var dummyContent = {
                    "title": "Kiosk",
                    "templateType": "experience-fragment-web-variation",
                    ":items": {
                        "root": {
                            "columnCount": 12,
                            "gridClassNames": "aem-Grid aem-Grid--12 aem-Grid--default--12",
                            ":items": {
                                "portal_container": {
                                    "columnClassNames": "aem-GridColumn aem-GridColumn--default--12",
                                    "columnCount": 12,
                                    "gridClassNames": "aem-Grid aem-Grid--12 aem-Grid--default--12",
                                    ":items": {
                                        "text": {
                                            "columnClassNames": "aem-GridColumn aem-GridColumn--default--12",
                                            ":type": "foundation/components/text",
                                            "textIsRich": "true",
                                            "text": "\u003Cp style=\"text-align: center;\"\u003E\u003Cb\u003EFind, Reach, and Resolve your concerns with&nbsp;\u003Cbr\u003E\r\nKnowledge Base Articles\u003C/b\u003E\u003C/p\u003E\r\n"
                                        },
                                        "demosearchbar": {
                                            "columnClassNames": "aem-GridColumn aem-GridColumn--default--12",
                                            ":type": "amazon-hr/components/content/demo/demosearchbar",
                                            "footerText": "   ",
                                            "maxResults": "10",
                                            "advanceSearchLink": "/content/amazon/us/en/advance-search"
                                        },
                                        "contentfragment": {
                                            "columnClassNames": "aem-GridColumn aem-GridColumn--default--12",
                                            ":type": "dam/cfm/components/contentfragment",
                                            "text": "\n\n\n\n\n\n            Do you have feedback, ideas, or questions on Amazon Does That?\n\n\n\n\n\n\n\n\n\n",
                                            "fileReference": "/content/dam/demo-amazon-hr/notification",
                                            "variation": "master",
                                            "element": "main"
                                        }
                                    },
                                    ":itemsOrder": ["text", "demosearchbar", "contentfragment"],
                                    ":type": "amazon-hr/components/content/demo/portal-container"
                                }
                            },
                            ":itemsOrder": ["portal_container"],
                            ":type": "wcm/foundation/components/responsivegrid"
                        }
                    },
                    ":itemsOrder": ["root"],
                    ":type": "weretail/components/structure/xfpage"
                }
                dispatch(pageDetailsSuccess(dummyContent)) 
            })
            .catch(() => {
                
            });
    };
}

export function pageDetailsSuccess(items) {
    return {
        type: 'PAGE_FETCH_DATA_SUCCESS',
        items
    };
}

