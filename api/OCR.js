import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';
import { domain, token } from './env.js';

const imgPath = open('../file/ลำดับ5_56.png', 'b');

export function OCR() {
    const url = `${domain}/ai-engine/api/v1/ocr`;
    const formData = new FormData();
    formData.append('document_id', 'test-1');
    formData.append('page_id', 'page-1');
    formData.append(
        'file',
        http.file(imgPath, 'ลำดับ5_56.png', 'image/png')
    );
    const headers = {
        'Content-Type': `multipart/form-data; boundary=${formData.boundary}`,
    };
    const response = http.post(url, formData.body(), { headers });
    return response;
}