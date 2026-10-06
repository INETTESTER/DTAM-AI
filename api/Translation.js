import http from 'k6/http';
import { domain } from './env.js';

export function Translation() {
    const no = __VU
    const url = `${domain}/ai-engine/api/v1/translation`;
    const payload = JSON.stringify({
        document_id: 'test-1' + no,
        page_id: 'page-1' + no,
        data: {
            ocr_result: 'ข้าวเหนียวที่การีปี จะกล่าวว่าการีก จึงกำนันที่ถ่ายทอดมาจาก รัชกาลที่ ๖ รัชกาลที่ ๗ รัชกาลที่ ๘ รัชกาลที่ ๙ รัชกาลที่ ๑๐ รัชกาลที่ ๑๑ รัชกาลที่ ๑๒ รัชกาลที่ ๑๓ รัชกาลที่ ๑๔ รัชกาลที่ ๑๕ '
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