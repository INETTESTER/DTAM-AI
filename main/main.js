//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { Rate } from 'k6/metrics';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { OCR } from '../api/OCR.js';
import { Translation } from '../api/Translation.js';
import { Evaluate_Accuracy } from '../api/Evaluate_Accuracy.js';
import { Evaluate_CER } from '../api/Evaluate_CER.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function)
   response = OCR()
  // response = Translation()
  // response = Evaluate_Accuracy()
  //response = Evaluate_CER()

  const duration = response.timings.duration;

  under5s.add(duration < 5000);
  between5and10s.add(duration >= 5000 && duration <= 10000);
  over10s.add(duration > 10000);


  error_check(response);
  sleep(1)
}

const under5s = new Rate('response_under_5s');
const between5and10s = new Rate('response_5_to_10s');
const over10s = new Rate('response_over_10s');