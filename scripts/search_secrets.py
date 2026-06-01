import os

def search_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        for file in files:
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    if 'service_role' in content or 'SUPABASE_SERVICE_ROLE' in content or 'postgresql://' in content:
                        print(f"Found secret in: {path}")
            except Exception as e:
                pass

search_files('.')
