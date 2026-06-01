import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic replacements
    content = content.replace("onNavigate('landing')", "navigate('/')")
    content = content.replace("onNavigate('dashboard')", "navigate('/dashboard')")
    content = content.replace("onNavigate('mocktest')", "navigate('/mocktest/N5')") # Default to N5 for general mocktest links
    content = content.replace("onNavigate('results')", "navigate('/results')")
    content = content.replace("onNavigate('review')", "navigate('/review')")
    content = content.replace("onNavigate('pricing')", "navigate('/pricing')")
    
    # Remove onNavigate from Props type
    content = re.sub(r"interface Props\s*{[^}]*onNavigate[^}]*}\n?", "", content)
    content = re.sub(r"onNavigate: Props\['onNavigate'\](?:;\s*|\s*,?\s*)", "", content)
    content = re.sub(r"\{ onNavigate[^}]*\}", "{}", content)
    content = re.sub(r"\{ onNavigate \}: Props", "()", content)
    content = re.sub(r"\{ onNavigate \}", "()", content)
    content = re.sub(r"onNavigate=\{onNavigate\}", "", content)
    
    # Need to add import { useNavigate } from 'react-router-dom'; 
    # and const navigate = useNavigate(); inside the main components
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('src/sections/LandingPage.tsx')
process_file('src/sections/Dashboard.tsx')
process_file('src/sections/MockTest.tsx')
process_file('src/sections/Results.tsx')
process_file('src/sections/ReviewMode.tsx')
process_file('src/sections/PricingPage.tsx')

print("Refactored successfully")
