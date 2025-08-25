
# AI Benchmarks with LM Studio

This project documents the performance of various AI language models on different devices using LM Studio. The goal is to provide transparent, reproducible benchmarks to help users understand how models perform across hardware setups.

## Upcoming Features
Planned improvements for this project include:
- Expanded model support (more LLMs and quantization options)
- Automated result submission and aggregation
- Interactive web dashboard for visualizing results
- Power usage and efficiency metrics
- Support for additional hardware platforms

## Testing Methodology
To ensure fair and reproducible benchmarks, the following methodology is used:
- Devices are tested under consistent conditions (e.g., plugged in, same OS power settings)
- OS power settings (e.g., High Performance, Balanced, Battery Saver) are documented for each run
- Each model is run multiple times and results are averaged
- Metrics collected: Time to First Token (TTFT), Tokens Per Second (TPS), and optionally power consumption
- Any deviations or special configurations are noted in the results

Question: Can you explain the different linux distros to me? 

## Devices Tested
For each device, please provide:
- **Manufacturer/Model**
- **CPU**
- **RAM**
- **GPU**
- **VRAM**

Example:
| Manufacturer/Model   | CPU                   | RAM  | GPU                        | VRAM |
|----------------------|-----------------------|------|----------------------------|------|
| Microsoft Surface Book 2 | Intel i7-8650U @ 1.90GHz | 16GB | NVIDIA GeForce GTX 1060   | 6GB  |
| ASUS ROG Ally X         | AMD Ryzen Z1 Extreme      | 16GB | AMD Radeon Graphics (RDNA 3) | 8GB  |

## Benchmark Results Format
For each device, list the models tested and provide the following metrics for each model:
- **Model Name**
- **Time to First Token (TTFT)**
- **Tokens Per Second (TPS)**
- **Other relevant metrics**

Example:

### Microsoft Surface Book 2
| Model                        | Quant   | Size    | TTFT (s) | TPS   | Notes |
|------------------------------|---------|---------|----------|-------|-------|
| gpt-oss-20b                  | MXFP4   | 11.28GB | 8.80     | 3.60  |       |
| deepseek-r1-0528-qwen3-8b    | Q4_K_M  | 4.68GB  | 3.13     | 3.18  |       |

### ASUS ROG Ally X
| Model                        | Quant   | Size    | TTFT (s) | TPS   | Notes |
|------------------------------|---------|---------|----------|-------|-------|
| gpt-oss-20b                  | MXFP4   | 11.28GB | 2.33     | 10.20 |       |
| deepseek-r1-0528-qwen3-8b    | Q4_K_M  | 4.68GB  | 0.64     | 15.36 |       |

### Combined Results Table

| Manufacturer | Model            | CPU                   | RAM  | GPU                        | VRAM | gpt-oss-20b (TTFT/TPS) | deepseek-r1-0528-qwen3-8b (TTFT/TPS) |
|--------------|------------------|-----------------------|------|----------------------------|------|-----------------------|---------------------------------------|
| Microsoft    | Surface Book 2   | Intel i7-8650U @ 1.90GHz | 16GB | NVIDIA GeForce GTX 1060   | 6GB  | 8.80 / 3.60           | 3.13 / 3.18                           |
| ASUS         | ROG Ally X       | AMD Ryzen Z1 Extreme      | 16GB | AMD Radeon Graphics (RDNA 3) | 8GB  | 2.33 / 10.20          | 0.64 / 15.36                          |


## How to Run Benchmarks with LM Studio
1. Download and install LM Studio from [lmstudio.ai](https://lmstudio.ai/).
2. Load your desired model.
3. Run the benchmark script (Coming Soon) or use the built-in performance metrics.
4. Record TTFT, TPS, and other relevant data.


## Contributing
Feel free to reach out about getting devices added or sending over results!

## License
See `LICENSE.md` for details.
