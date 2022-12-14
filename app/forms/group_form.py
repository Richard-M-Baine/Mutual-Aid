from flask_wtf import FlaskForm
from wtforms.fields import StringField, TextAreaField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired






class NewGroup(FlaskForm):

    name = StringField('name', validators=[DataRequired()])
    about = TextAreaField('about', validators=[DataRequired()])
    purpose = StringField("purpose", validators=[DataRequired()])
    private = BooleanField()
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    submit = SubmitField()