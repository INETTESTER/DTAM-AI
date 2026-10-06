import http from 'k6/http';
import { domain } from './env.js';
export function Evaluate_CER() {
    const no = __VU
    const url = `${domain}/ai-engine/api/v1/evaluate`;
    const payload = JSON.stringify({
        document_id: 'document_id' + no,
        page_id: 'page_id' + no,
        metric_type: 'cer',
        data: {
            ocr_result: '๏ ให้เอาขิงแห้ง ดีปลี รากเจตมูลเพลิง...'
        }
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = http.post(url, payload, params);
    return response;
}