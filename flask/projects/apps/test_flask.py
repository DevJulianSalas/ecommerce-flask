# -*- coding: utf-8 -*-

# own package
from app import app


# native packages
import unittest


# installed package
from flask import Flask
from flask.ext.testing import LiveServerTestCase





#TDD

class BasicTestCase(unittest.TestCase):

    def test_index(self):
        tester = app.test_client(self)
        response = tester.get("/", content_type="html/text")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b"Hello world")


if __name__ == '__main__':
    unittest.main()
