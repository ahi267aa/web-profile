## Preparatory 
- **下載Miniforge取代Anaconda，達成conda使用條件**
```bash
bash Miniforge-pypy3-Linux-x86_64.sh
```
```bash
source ~/.bashrc
```

- **Python環境設置**
```bash
conda create --name langchain python=3.10.4
```  

- **API-KEY Apply**
**1、根據步驟進行下載，並設置 GOOGLE_API_KEY 到 app.py 中**
```bash
https://developers.google.com/maps/documentation/javascript/get-api-key?hl=zh-tw
```
**2、根據步驟進行下載，並設置 GOOGLE_APPLICATION_CREDENTIALS 到檔案路徑**
```bash
https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries?hl=zh-tw
```

- **Ollama下載（For Qwen2 Model）**
下載網址：https://ollama.com/
```bash
ollama pull qwen2
```  


## Quick Install

```bash
pip install -r requirements.txt
``` 


## Quick Start

- **1、Start with only Gemini Model First**
```bash
python ui_app.py
```

- **2、Implement with Gemini and Qwen2 Model**
```bash
python ui_app_multiplefile.py
```

- **3、Implement with Streamlit**
```bash
streamlit run app.py
```
