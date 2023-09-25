from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in associated_terminals/__init__.py
from associated_terminals import __version__ as version

setup(
	name="associated_terminals",
	version=version,
	description="Associated Terminals Dev App",
	author="Sameed Hasan",
	author_email="sameedh41@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
