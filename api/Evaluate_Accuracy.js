import http from 'k6/http';
import { domain } from './env.js';

export function Evaluate_Accuracy() {
    const url = `${domain}/api/v1/evaluate`;

    const payload = JSON.stringify({
        document_id: 'document_id',
        page_id: 'page_id',
        metric_type: 'accuracy',
        data: {
            translate_result: '๏ ให้เอาขิงแห้ง ดีปลี รากเจตมูลเพลิง...'
        }
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    console.log(response.body);

    return response;
}